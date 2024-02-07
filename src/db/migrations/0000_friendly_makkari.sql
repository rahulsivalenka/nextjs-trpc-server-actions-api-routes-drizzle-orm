CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`todo` text(1000) NOT NULL,
	`done` integer DEFAULT false
);
