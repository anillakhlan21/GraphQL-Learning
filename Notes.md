## Query Fragments

{
  company(id: "2"){
    id,
    name,
    description,
    users{
      id,
      firstName
    }
  },
  company(id: "1"){
      id,
    name,
    description,
    users{
      id,
      firstName
    }
  }
}
We can not do this because in a single object we have two fields with same names.

But you can follow below pattern:-

{
  apple: company(id: "2"){
    id,
    name,
    description,
    users{
      id,
      firstName
    }
  },
  microsoft: company(id: "1"){
      id,
    name,
    description,
    users{
      id,
      firstName
    }
  }
}


Use of fragments:

{
  apple: company(id: "2") {
    ...companyDetails
  }
  microsoft: company(id: "1") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
}
