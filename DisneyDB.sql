USE [master]
GO
/****** Object:  Database [prsonajes]    Script Date: 4/7/2023 21:17:59 ******/
CREATE DATABASE [prsonajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'prsonajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\prsonajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'prsonajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\prsonajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [prsonajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [prsonajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [prsonajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [prsonajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [prsonajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [prsonajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [prsonajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [prsonajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [prsonajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [prsonajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [prsonajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [prsonajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [prsonajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [prsonajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [prsonajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [prsonajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [prsonajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [prsonajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [prsonajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [prsonajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [prsonajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [prsonajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [prsonajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [prsonajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [prsonajes] SET RECOVERY FULL 
GO
ALTER DATABASE [prsonajes] SET  MULTI_USER 
GO
ALTER DATABASE [prsonajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [prsonajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [prsonajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [prsonajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [prsonajes] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [prsonajes] SET QUERY_STORE = OFF
GO
USE [prsonajes]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 4/7/2023 21:17:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[IdPersonaje] [int] IDENTITY(1,1) NOT NULL,
	[Foto] [varchar](500) NULL,
	[Nombre] [varchar](500) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[IdPersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Series]    Script Date: 4/7/2023 21:17:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Series](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Foto] [varchar](500) NULL,
	[Titulos] [varchar](500) NOT NULL,
	[Fecha] [date] NOT NULL,
	[Clasificacion] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Series] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, NULL, N'Mickey Mouse', 92, 23, N'Mickey Mouse es un personaje clásico de Disney.')
INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (2, NULL, N'Minnie Mouse', 91, 20, N'Minnie Mouse es la compañera de Mickey Mouse.')
INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (3, NULL, N'Donald Duck', 88, 32, N'Donald Duck es un famoso pato de Disney.')
INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, NULL, N'Mickey Mouse', 92, 23, N'Mickey Mouse es un personaje clásico de Disney.')
INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (5, NULL, N'Minnie Mouse', 91, 20, N'Minnie Mouse es la compañera de Mickey Mouse.')
INSERT [dbo].[Personajes] ([IdPersonaje], [Foto], [Nombre], [Edad], [Peso], [Historia]) VALUES (6, NULL, N'Donald Duck', 88, 32, N'Donald Duck es un famoso pato de Disney.')
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
SET IDENTITY_INSERT [dbo].[Series] ON 

INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (1, NULL, N'Mickey Mouse Clubhouse', CAST(N'2006-05-05' AS Date), N'Apto para todo público')
INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (2, NULL, N'Minnies Bow-Toons', CAST(N'2011-02-14' AS Date), N'Apto para todo público')
INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (3, NULL, N'DuckTales', CAST(N'1987-09-18' AS Date), N'Apto para todo público')
INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (4, NULL, N'Mickey Mouse Clubhouse', CAST(N'2006-05-05' AS Date), N'Apto para todo público')
INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (5, NULL, N'Minnies Bow-Toons', CAST(N'2011-02-14' AS Date), N'Apto para todo público')
INSERT [dbo].[Series] ([id], [Foto], [Titulos], [Fecha], [Clasificacion]) VALUES (6, NULL, N'DuckTales', CAST(N'1987-09-18' AS Date), N'Apto para todo público')
SET IDENTITY_INSERT [dbo].[Series] OFF
GO
USE [master]
GO
ALTER DATABASE [prsonajes] SET  READ_WRITE 
GO
