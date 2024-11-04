import pymysql as MySql
def ConnectionPooling():
    DB=MySql.connect(host='localhost',port=3306,user='root',password='Welcome@1234',database='medassist_com',cursorclass=MySql.cursors.DictCursor)
    CMD=DB.cursor()
    return DB,CMD