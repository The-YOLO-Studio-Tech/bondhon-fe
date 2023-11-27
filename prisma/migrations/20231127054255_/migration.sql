/*
  Warnings:

  - You are about to drop the column `blogSubCategoryId` on the `Blog` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Blog] DROP CONSTRAINT [Blog_blogSubCategoryId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Blog] DROP COLUMN [blogSubCategoryId];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
