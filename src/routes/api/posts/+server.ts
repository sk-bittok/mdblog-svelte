import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit";


/**
 * Retrieves and processes a list of blog posts from Markdown files.
 *
 * This function scans the `/src/posts/` directory for Markdown files,
 * extracts their metadata, and constructs an array of `Post` objects.
 * The posts are filtered to include only those marked as `published`
 * and are sorted in descending order by their publication date.
 *
 * @returns {Promise<Post[]>} A promise that resolves to an array of `Post` objects.
 *
 * @remarks
 * - The function uses `import.meta.glob` to dynamically import Markdown files.
 * - Each Markdown file is expected to have a `metadata` property containing
 *   the post's details (e.g., title, date, etc.).
 * - The `slug` for each post is derived from the file name.
 *
 * @throws {Error} If the metadata structure is invalid or if the date format
 * is not parseable.
 *
 * @example
 * const posts = await getPosts();
 * console.log(posts);
 */
async function getPosts() {
    let posts: Post[] = [];

    const paths = import.meta.glob("/src/posts/*.md", {
        eager: true,
    });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Post, "slug">;
            const post: Post = { ...metadata, slug } satisfies Post;
            post.published && posts.push(post);
        }
    }

    posts = posts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return posts;
}

/**
 * Handles the GET request to retrieve a list of posts.
 *
 * @returns {Promise<Response>} A JSON response containing the list of posts.
 */
export async function GET() {
    const posts: Post[] = await getPosts();
    return json(posts);
}
