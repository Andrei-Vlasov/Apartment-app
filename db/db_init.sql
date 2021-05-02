CREATE TABLE "User" (
    "UserID" serial   NOT NULL,
    "Email" varchar(255)   NOT NULL,
    "PasswordHash" varchar(255)   NOT NULL,
    "DateJoined" timestamp   NOT NULL,
    "FirstName" varchar(255)   NOT NULL,
    "LastName" varchar(255)   NOT NULL,
    "PhoneNumber" int   NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "UserID"
     )
);

CREATE TABLE "ApartmentAdvert" (
    "AdvertID" serial   NOT NULL,
    "AuthorID" int   NOT NULL,
    "DateCreated" timestamp   NOT NULL,
    "DealType" int   NOT NULL,
    "LocationData" text   NOT NULL,
    "Price" numeric(15,2)   NOT NULL,
    "Title" varchar(255)   NOT NULL,
    "RoomCount"  int    NOT NULL,
    "Space" int   NOT NULL,
    "LivingSpace" int   NOT NULL,
    "Height" int,
    "Floor" int,
    "TotalFloors" int,
    "Year Built" int,
    "Condition" varchar(255),
    "Heating" varchar(255),
    "Walls" varchar(255),
    CONSTRAINT "pk_ApartmentAdvert" PRIMARY KEY (
        "AdvertID"
     )
);

CREATE TABLE "DealType" (
    "DealTypeID" serial   NOT NULL,
    "DealName" varchar(255)   NOT NULL,
    CONSTRAINT "pk_DealType" PRIMARY KEY (
        "DealTypeID"
     )
);

CREATE TABLE "Admin" (
    "AdminID" serial   NOT NULL,
    "Login" varchar(255)   NOT NULL,
    "PasswordHash" varchar(255)   NOT NULL,
    "DateGranted" timestamp   NOT NULL,
    CONSTRAINT "pk_Admin" PRIMARY KEY (
        "AdminID"
     )
);

ALTER TABLE "ApartmentAdvert" ADD CONSTRAINT "fk_ApartmentAdvert_AuthorID" FOREIGN KEY("AuthorID")
REFERENCES "User" ("UserID");

ALTER TABLE "ApartmentAdvert" ADD CONSTRAINT "fk_ApartmentAdvert_DealType" FOREIGN KEY("DealType")
REFERENCES "DealType" ("DealTypeID");

