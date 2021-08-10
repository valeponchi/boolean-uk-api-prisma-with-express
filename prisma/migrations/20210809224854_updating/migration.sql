-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
