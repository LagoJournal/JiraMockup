
interface SeedData{
    entries:SeedEntry[]
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}

export const seedData:SeedData = {
    entries: [
        {
            description: "Elit duis consectetur enim occaecat voluptate officia.",
            status: "pending",
            createdAt: Date.now(),
          },
          {
            description:
              "Proident veniam dolore enim incididunt fugiat adipisicing in cillum ad ullamco labore sunt aliquip anim.",
            status: "in-progress",
            createdAt: Date.now() - 100000,
          },
          {
            description:
              "Voluptate consectetur dolore Lorem adipisicing qui proident veniam occaecat id commodo in veniam fugiat sit.",
            status: "finished",
            createdAt: Date.now() - 1000000,
          },
    ]
}