# Migration `20200820200838-add-assets-to-champion`

This migration has been generated by Donny Roufs at 8/20/2020, 10:08:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Champion" ADD COLUMN "splash" text  NOT NULL ,
ADD COLUMN "icon" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200818105145-add_notes_table..20200820200838-add-assets-to-champion
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -71,8 +71,10 @@
 model Champion {
   id                  Int       @id
   name                String    @unique
   image               String
+  splash              String
+  icon                String
   version             String
   createdAt           DateTime  @default(now())
   updatedAt           DateTime  @updatedAt
   matchup_champion_id Matchup[] @relation("matchup_champion_id")
```

