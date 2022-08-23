# mi-voz (my-voice)

Manager tool for voice actors/actress (aka Owner), to manage: schedule contacts, companies and recordings. Also it has a public interface to contact them and show their work

## Despcription


## Page Models

- Owner: only one with access to Private Zone
- Contact: owner's interest in
- Company: can contain n Contacts. owner's interest in
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

- Private Area (owner must be logged in)
	- Schedule
	- Contact CRUD
		- added/delete from company
	- Company CRUD
		- add/delete persons
	- Recorings CRUD

## TODO

- Login system
- database schema
- swagger
- express-validator


# BACKLOG

- add companyProposal from public Area: anonymous company can ask for a connection
- add Document Model with CRUD: text with interest in owner
