/*
  Warnings:

  - You are about to alter the column `base64` on the `Advertisement` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(Max)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Advertisement] ALTER COLUMN [base64] VARCHAR(max) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
