/*
  Warnings:

  - You are about to drop the `Emagazine` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Emagazine];

-- CreateTable
CREATE TABLE [dbo].[Magazine] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [thumbnail] VARCHAR(max),
    [url] VARCHAR(max),
    [month] NVARCHAR(1000) NOT NULL,
    [year] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Magazine_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
