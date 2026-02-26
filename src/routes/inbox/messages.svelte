<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import ReplyIcon from "@lucide/svelte/icons/reply";
  import { getMessages } from "$lib/remote/message.remote";
  import { formatDate } from "$lib/utils/format-date";
</script>

<ul>
  {#each await getMessages() as { _id, createdAt, email, message, name } (_id)}
    <li class="card">
      <div class="card__header">
        <p class="name">{name}</p>
        <p class="email">{email}</p>
      </div>

      <p class="message">
        {message}
      </p>

      <div class="card__footer">
        <p class="date">{formatDate(createdAt)}</p>
        <a href="mailto:{email}">
          <Button size="small" intent="primary">
            Reply <ReplyIcon />
          </Button>
        </a>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top-width: 1px;
    border-style: solid;
    border-color: var(--color-neutral-6);
    background-color: var(--color-neutral-1);
    padding: 1rem;

    &:last-of-type {
      border-bottom-width: 1px;
    }
  }

  .card__header {
    display: flex;
    flex-direction: column;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .name {
    color: var(--color-neutral-12);
    font-weight: 500;
    font-size: var(--label-medium);
    letter-spacing: -0.025em;
  }

  .email {
    color: var(--color-neutral-11);
    font-weight: 500;
    font-size: var(--label-small);
    letter-spacing: -0.025em;
  }

  .message {
    font-weight: 400;
    font-size: var(--body-medium);
    line-height: 1.5;
    text-wrap: pretty;
  }

  .date {
    color: var(--color-neutral-11);
    font-weight: 500;
    font-size: var(--label-medium);
    letter-spacing: -0.025em;
  }
</style>
