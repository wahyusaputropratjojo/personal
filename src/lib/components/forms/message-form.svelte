<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import Input from "$lib/components/ui/input.svelte";
  import Textarea from "$lib/components/ui/textarea.svelte";
  import { createMessage } from "$lib/remote/message.remote";
  import {
    Field,
    FieldSet,
    FieldLegend,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldError,
  } from "$lib/components/ui/field";

  const { email, message, name } = createMessage.fields;
</script>

<form {...createMessage} onchange={() => createMessage.validate()}>
  <FieldSet>
    <FieldLegend>Message</FieldLegend>
    <FieldDescription>
      Let's get in touch. I am available for commissions and collaborations, or
      simply for a conversation.
    </FieldDescription>
    <FieldGroup>
      <Field>
        <FieldLabel for="name">Name</FieldLabel>
        <Input id="name" {...name.as("text")} />
        <FieldError errors={name.issues()} />
      </Field>

      <Field>
        <FieldLabel for="email">Email</FieldLabel>
        <Input id="email" {...email.as("text")} />
        <FieldError errors={email.issues()} />
      </Field>

      <Field>
        <FieldLabel for="message">Message</FieldLabel>
        <Textarea id="message" {...message.as("text")} />
        <FieldError errors={message.issues()} />
      </Field>

      <Field>
        <Button type="submit">Send Message</Button>
      </Field>
    </FieldGroup>
  </FieldSet>
</form>
