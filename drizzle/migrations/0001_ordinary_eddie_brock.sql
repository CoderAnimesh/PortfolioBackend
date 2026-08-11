CREATE TABLE "contact" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"email" varchar(100),
	"message" text,
	"created_at" timestamp DEFAULT now()
);
