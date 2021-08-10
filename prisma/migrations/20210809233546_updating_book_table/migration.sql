/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - Added the required column `topic` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre",
ADD COLUMN     "topic" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
