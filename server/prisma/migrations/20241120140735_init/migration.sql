/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Task` table. All the data in the column will be lost.
  - Added the required column `fileURL` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "fileUrl",
ADD COLUMN     "fileURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "endDate",
ADD COLUMN     "dueDate" TIMESTAMP(3);
