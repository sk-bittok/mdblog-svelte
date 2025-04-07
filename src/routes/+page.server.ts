import type { Post } from "$lib/types";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
    const response = await fetch("/api/posts");
    const posts: Post[] = await response.json();
    return { posts };
}
