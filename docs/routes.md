# PUBLIC_ZONE
get:/


# PRIVATE_ZONE

## getters
get:owner main entry for private zone
get:owner/details
get:contacts         list of contacts
get:contacts/{id}    detail 1 contacts
get:companies         list cof comapanies
get:companies/{id}    detail of {id} companies
get:document
get:document/{id}
get:recording
get:recording/{id}

## setters
post:contacts
post:contacts/{id}/add/companies{id}
post:companies
post:companies/{id}/add/contacts/[{ids}]
post:document
post:recording

## system
get:login comes from '/'
get:fresh-start comes form '/' when there is no owner


post:user/add  comes from fresh-start
post:contacts/proposal
post:contacts/add  comes from contacts-proposal
post:companies/proposal
post:companies/add  comes from contacts-proposal