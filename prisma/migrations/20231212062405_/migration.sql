/*
  Warnings:

  - You are about to alter the column `description_html` on the `Blog` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(Max)` to `VarChar(Max)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Blog] ALTER COLUMN [description_html] VARCHAR(max) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
