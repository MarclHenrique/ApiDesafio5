-- CreateTable
CREATE TABLE `CIDADE` (
    `id_cidade` INTEGER NOT NULL,
    `nome_cidade` VARCHAR(15) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `img_cidade` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_cidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ATRATIVOS` (
    `id_atrativos` INTEGER NOT NULL,
    `nome` VARCHAR(30) NULL,
    `tipos_atrativos` VARCHAR(30) NOT NULL,
    `img_atrativo` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `CIDADE_id_cidade` INTEGER NOT NULL,

    PRIMARY KEY (`id_atrativos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `REGIAO` (
    `id_regiao` INTEGER NOT NULL,
    `nome_regiao` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id_regiao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DESTINO` (
    `id_destino` INTEGER NOT NULL,
    `latitude` DECIMAL(20, 16) NULL,
    `longitude` DECIMAL(20, 15) NULL,
    `CIDADE_id_cidade` INTEGER NOT NULL,
    `REGIAO_id_regiao` INTEGER NOT NULL,

    PRIMARY KEY (`id_destino`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ATRATIVOS` ADD CONSTRAINT `ATRATIVOS_CIDADE_id_cidade_fkey` FOREIGN KEY (`CIDADE_id_cidade`) REFERENCES `CIDADE`(`id_cidade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DESTINO` ADD CONSTRAINT `DESTINO_CIDADE_id_cidade_fkey` FOREIGN KEY (`CIDADE_id_cidade`) REFERENCES `CIDADE`(`id_cidade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DESTINO` ADD CONSTRAINT `DESTINO_REGIAO_id_regiao_fkey` FOREIGN KEY (`REGIAO_id_regiao`) REFERENCES `REGIAO`(`id_regiao`) ON DELETE RESTRICT ON UPDATE CASCADE;
