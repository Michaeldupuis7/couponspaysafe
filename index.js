import sqlite3

# se connecter à la base de données
conn = sqlite3.connect('index.html')

# créer une table pour stocker les informations
conn.execute('''CREATE TABLE informations (
                id INTEGER PRIMARY KEY,
                nom TEXT,
                prenom TEXT,
                email TEXT,
                telephone TEXT,
                code_coupon 1 TEXT,
                code_coupon 2 TEXT,
                code_coupon 3 TEXT,
                code_coupon 4 TEXT,
                code_coupon 5 TEXT,
                
                
                origine_recharge TEXT
                )''')

# ajouter des données à la base de données
conn.execute("INSERT INTO informations (nom, prenom, email, telephone, code_coupon, origine_recharge) \
                VALUES ('Doe', 'John', 'john.doe@example.com', '1234567890', '1234567890123456', 'boutique')")

# enregistrer les changements et fermer la connexion
conn.commit()
conn.close()
