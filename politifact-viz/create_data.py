import pickle


def main():
    #speakers = pickle.load(open('speakers.pickle', 'rb'))
    #keys = {"id": "id", "first_name": "first_name", "last_name": "last_name",
    #        "party": ["party", "id"], "description": "current_job",
    #        "photo_url": "photo", "website_url": "website"}
    #process('Speakers', keys, speakers)

    #statements = pickle.load(open('statements.pickle', 'rb'))
    #keys = {"id": "id", "ruling": ["ruling", "id"], "ruling_date": "ruling_date",
    #        "statement_date": "statement_date", "title": "ruling_headline",
    #        "speaker": ["speaker", "id"], "text": "statement"}
    #process('Statements', keys, statements, 1)

    #subjects = pickle.load(open('subject.pickle', 'rb'))
    #keys = {"id": "id", "name": "subject", "description": "description"}
    #process('Subjects', keys, subjects, 1)

    #ruling = pickle.load(open('statementruling.pickle', 'rb'))
    #keys = {"id": "id", "name": "ruling", "photo_url": "ruling_graphic"}
    #process('Rulings', keys, ruling, 1)
    
    #process_statements_subjects()

    parties = pickle.load(open('party.pickle', 'rb'))
    keys = {"id": "id", "name": "party"}
    process('Parties', keys, parties, 1)


def process_statements_subjects():
    statements = pickle.load(open('statements.pickle', 'rb'))
    to_insert = []
    for statement in statements:
        statement_id = statement["id"]
        for subject in statement["subject"]:
            to_insert.append((statement_id, subject["id"]))

    sql_string = "INSERT INTO StatementSubject (statement_id, subject_id) VALUES {};".format(
            ",\n".join(format_tuple(tup, "{}") for tup in to_insert))
    with open("StatementSubject.sql", 'w') as out:
        out.write(sql_string)

def process(table, key_mappings, data, partitions):
    to_insert = []
    for example in data:
        value = []
        for field in key_mappings.keys():
            field_val = get(example, key_mappings[field])
            value.append(field_val)
        to_insert.append(tuple(value))

    chunk_len = int(len(data) / partitions)
    for i in range(partitions):
        subset = to_insert[i * chunk_len: i * chunk_len + chunk_len]
        sql_string = "INSERT INTO {} {} VALUES {};".format(table, format_tuple(list(key_mappings.keys()), "{}"), 
                "\n,".join(format_tuple(example, '"{}"') for example in subset))
        with open("{}{}.sql".format(table, i), "w") as out:
            out.write(sql_string)

def format_tuple(tup, form):
    result = '(' + form.format(str(tup[0]).replace('"', "&quot"))
    for i in range(1, len(tup)):
        result = result + ', ' + form.format(str(tup[i]).replace('"', "'"))

    return result + ")"


def get(json, keys):
    if type(keys) is list:
        result = json
        for key in keys:
            result = result[key]
        return result
    else: 
        return json[keys]


if __name__ == '__main__':
    main()
