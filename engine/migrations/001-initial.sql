--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE User (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  name     TEXT    NOT NULL,
  login    TEXT    NOT NULL,
  password TEXT
);

CREATE TABLE Client (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  userId   INTEGER NOT NULL,
  name     TEXT    NOT NULL,
  isActive NUMERIC NOT NULL DEFAULT 1,
  CONSTRAINT Client_fk_userId FOREIGN KEY (userId)
    REFERENCES User (id) ON UPDATE CASCADE ON DELETE CASCADE
  CONSTRAINT Client_ck_isActive CHECK (isActive IN (0, 1))
);

CREATE TABLE Project (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  clientId    INTEGER NOT NULL,
  name        TEXT    NOT NULL,
  isFinished  NUMERIC NOT NULL DEFAULT 0,
  amountHours NUMERIC,
  CONSTRAINT Project_fk_clientId FOREIGN KEY (clientId)
    REFERENCES Client (id) ON UPDATE CASCADE ON DELETE CASCADE
  CONSTRAINT Project_ck_isFinished CHECK (isFinished IN (0, 1))
);

CREATE INDEX Client_ix_userId ON Client (userId);

CREATE INDEX Project_ix_clientId on Project (clientId);

INSERT INTO User (id, name, login, password) VALUES (1, 'TEST USER', 'test', '123123');

INSERT INTO Client (id, userId, name, isActive) VALUES (1, 1, 'TEST CLIENT', 1);

INSERT INTO Project (id, clientId, name, isFinished) VALUES (1, 1, 'TEST PROJECT', 0);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP INDEX Project_ix_clientId;
DROP INDEX Client_ix_userId;
DROP TABLE Project;
DROP TABLE Client;
DROP TABLE User;