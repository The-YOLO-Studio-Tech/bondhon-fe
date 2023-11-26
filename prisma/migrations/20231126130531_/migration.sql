/*
  Warnings:

  - Added the required column `description_html` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_description` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Blog] ADD [description_html] NVARCHAR(1000) NOT NULL,
[short_description] NVARCHAR(1000) NOT NULL,
[status] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
