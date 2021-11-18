# mi-voz (my-voice)

Manager tool for voice actors/actress (aka Owner), to manage: schedule contacts, companies and recordings. Also it has a public interface to contact them and show their work

## Despcription


## Page Models

- Owner: only one with acces to Private Zone
- Contact: person with interest for owner
- Companiy: can contain n Contacts. Has interest for owner
- Recording: audio recorded by Owner
- Schedule:

## Zones

- Public Area
	- owner has basic page with info
	- published recordings
	- contact, form and social networks links
	- anonymous user can ask to be invited:
		-  as contact
		-  as company

- Private Area (owner must be loged in)
	- Schedule
	- Contact CRUD
		- added/delet from company
	- Company CRUD
		- add/delete presons
	- Recorings CRUD

## TODO

- Login system
- database schema
- swagger
- express-validator


# BACKLOG

- add companyProposal from public Area: anonymouns company can ask for a connection
- add Document Model with CRUD: text with interest for owner
