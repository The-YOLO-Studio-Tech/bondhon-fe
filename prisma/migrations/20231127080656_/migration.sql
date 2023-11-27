/*
  Warnings:

  - You are about to drop the column `group` on the `BlogCategory` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[BlogCategory] DROP COLUMN [group];
ALTER TABLE [dbo].[BlogCategory] ADD [menu] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
