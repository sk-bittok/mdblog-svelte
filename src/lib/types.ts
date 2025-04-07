export type Categories =
    | "sveltekit"
    | "svelte"
    | "rust"
    | "java"
    | "systems-programming"
    | "typescript"
    | "javascript"
    | "c"
    | "clang"
    | "python"
    | "programming" | "go";

export type Post = {
    title: string;
    slug: string;
    description: string;
    categories: Categories[];
    published: boolean;
    date: string;
};
