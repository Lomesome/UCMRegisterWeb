import pymysql

class Mysql():
    """
    同步操作
    """
    def __init__(self):
        # 建立连接
        self.conn = pymysql.connect(host="rm-2ze5kgn8oy5ke9ig8so.mysql.rds.aliyuncs.com", port=3306, user="user_message",passwd="Abc123456", db="user", charset="utf8")
        # 创建游标
        self.cursor = self.conn.cursor()

    def add_count(self, msg):
        # sql语句
        sql = "insert into userinformation(userid, password, nickname, phonenumber) values(%s, %s, %s, %s)"
        data = (msg['username'], msg['password'], msg['nickname'], msg['phonenumber'])
        # 执行插入数据到数据库操作
        self.cursor.execute(sql, data)
        # 提交，不进行提交无法保存到数据库
        self.conn.commit()

    def find_count(self, user):
        sql = "SELECT * FROM `userinformation` WHERE userid = " + user;
        # 执行查询数据到数据库操作
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        if result:
            return True
        return False

    def find_count_by_phonenumber(self, phonenumber):
        sql = "SELECT * FROM `userinformation` WHERE phonenumber = " + phonenumber;
        self.cursor.execute(sql)
        results = self.cursor.fetchall()
        return results


    def close_conn(self):
        # 关闭游标和连接
        self.cursor.close()
        self.conn.close()

    def creat(self, msg):
        self.add_count(msg)
        self.close_conn()