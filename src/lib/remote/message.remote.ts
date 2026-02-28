import { z } from "zod";
import { form, query, command } from "$app/server";
import { client } from "$lib/server/database";
import { MessageSchema } from "$lib/schemas/message-schema";
import { ObjectId } from "mongodb";

interface Message extends z.infer<typeof MessageSchema> {
  status: "active" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

export const getMessages = query(async (): Promise<Message[]> => {
  const messages = await client
    .db("personal")
    .collection<Message>("messages")
    .find()
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray();

  return messages.map((message) => ({
    ...message,
    _id: message._id.toString(),
  }));
});

export const createMessage = form(MessageSchema, async (message) => {
  await client
    .db("personal")
    .collection<Message>("messages")
    .insertOne({
      ...message,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "active",
    });

  await getMessages().refresh();
});

export const deleteMessage = command(z.string(), async (id) => {
  const _id = new ObjectId(id);

  await client.db("personal").collection<Message>("messages").findOneAndDelete({
    _id,
  });

  await getMessages().refresh();
});

export const archiveMessage = command(z.string(), async (id) => {
  const _id = new ObjectId(id);

  await client
    .db("personal")
    .collection<Message>("messages")
    .findOneAndUpdate(
      { _id },
      {
        $set: {
          status: "archived",
        },
      },
    );

  await getMessages().refresh();
});

export const activeMessage = command(z.string(), async (id) => {
  const _id = new ObjectId(id);

  await client
    .db("personal")
    .collection("messages")
    .findOneAndUpdate(
      { _id },
      {
        $set: {
          status: "active",
        },
      },
    );

  await getMessages().refresh();
});
