USE [master]
GO
/****** Object:  Database [DBProjectNetjs]    Script Date: 26/9/2023 17:25:22 ******/
CREATE DATABASE [DBProjectNetjs]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DBProjectNetjs', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DBProjectNetjs.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DBProjectNetjs_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DBProjectNetjs_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [DBProjectNetjs] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DBProjectNetjs].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DBProjectNetjs] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET ARITHABORT OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DBProjectNetjs] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DBProjectNetjs] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET  ENABLE_BROKER 
GO
ALTER DATABASE [DBProjectNetjs] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DBProjectNetjs] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET RECOVERY FULL 
GO
ALTER DATABASE [DBProjectNetjs] SET  MULTI_USER 
GO
ALTER DATABASE [DBProjectNetjs] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DBProjectNetjs] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DBProjectNetjs] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DBProjectNetjs] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DBProjectNetjs] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DBProjectNetjs] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'DBProjectNetjs', N'ON'
GO
ALTER DATABASE [DBProjectNetjs] SET QUERY_STORE = ON
GO
ALTER DATABASE [DBProjectNetjs] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [DBProjectNetjs]
GO
/****** Object:  Table [dbo].[Coins]    Script Date: 26/9/2023 17:25:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Coins](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [varchar](20) NULL,
	[Name] [varchar](30) NULL,
	[Symbol] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DocumentType]    Script Date: 26/9/2023 17:25:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt]    Script Date: 26/9/2023 17:25:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdCoins] [int] NOT NULL,
	[Amount] [decimal](18, 2) NULL,
	[Title] [varchar](30) NULL,
	[Description] [varchar](30) NULL,
	[Address] [varchar](100) NULL,
	[FullName] [varchar](200) NULL,
	[IdDocumentType] [int] NOT NULL,
	[IdUsers] [int] NOT NULL,
 CONSTRAINT [PK__Receipt__3214EC07229D6B40] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeUser]    Script Date: 26/9/2023 17:25:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeUser](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 26/9/2023 17:25:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[LastName] [varchar](100) NULL,
	[IdTypeUser] [int] NOT NULL,
 CONSTRAINT [PK__Users__3214EC070717E7D7] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Coins] ON 

INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (1, N'BRL', N'Brazil', N'ZYNE')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (2, N'BRL', N'Brazil', N'MGP')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (3, N'BRL', N'Brazil', N'PI')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (4, N'BRL', N'Brazil', N'DAC')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (5, N'BRL', N'Brazil', N'MTGE')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (6, N'BRL', N'Brazil', N'SFL')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (7, N'BRL', N'Brazil', N'CMU')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (8, N'BDT', N'Bangladesh', N'ABEOW')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (9, N'BRL', N'Brazil', N'WHLRD')
INSERT [dbo].[Coins] ([Id], [Code], [Name], [Symbol]) VALUES (10, N'BRL', N'Brazil', N'HRB')
SET IDENTITY_INSERT [dbo].[Coins] OFF
GO
SET IDENTITY_INSERT [dbo].[DocumentType] ON 

INSERT [dbo].[DocumentType] ([Id], [Name]) VALUES (1, N'Boleta')
INSERT [dbo].[DocumentType] ([Id], [Name]) VALUES (2, N'Factura')
SET IDENTITY_INSERT [dbo].[DocumentType] OFF
GO
SET IDENTITY_INSERT [dbo].[Receipt] ON 

INSERT [dbo].[Receipt] ([Id], [IdCoins], [Amount], [Title], [Description], [Address], [FullName], [IdDocumentType], [IdUsers]) VALUES (2, 2, CAST(2222.22 AS Decimal(18, 2)), N'test', N'testtdstetsetste', N'dtstadasdadsa', N'testets', 1, 1)
SET IDENTITY_INSERT [dbo].[Receipt] OFF
GO
SET IDENTITY_INSERT [dbo].[TypeUser] ON 

INSERT [dbo].[TypeUser] ([Id], [Name]) VALUES (1, N'Freelancer
')
SET IDENTITY_INSERT [dbo].[TypeUser] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Name], [LastName], [IdTypeUser]) VALUES (1, N'Altahir', N'Martinez Pardo', 1)
INSERT [dbo].[Users] ([Id], [Name], [LastName], [IdTypeUser]) VALUES (2, N'Renzo', N'Test', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD  CONSTRAINT [FK_Receipt_Coins] FOREIGN KEY([IdCoins])
REFERENCES [dbo].[Coins] ([Id])
GO
ALTER TABLE [dbo].[Receipt] CHECK CONSTRAINT [FK_Receipt_Coins]
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD  CONSTRAINT [FK_Receipt_DocumentType] FOREIGN KEY([IdDocumentType])
REFERENCES [dbo].[DocumentType] ([Id])
GO
ALTER TABLE [dbo].[Receipt] CHECK CONSTRAINT [FK_Receipt_DocumentType]
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD  CONSTRAINT [FK_Receipt_Users] FOREIGN KEY([IdUsers])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Receipt] CHECK CONSTRAINT [FK_Receipt_Users]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_TypeUser] FOREIGN KEY([IdTypeUser])
REFERENCES [dbo].[TypeUser] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_TypeUser]
GO
USE [master]
GO
ALTER DATABASE [DBProjectNetjs] SET  READ_WRITE 
GO
