import os
import time
from flask import Flask, render_template, request, jsonify, url_for
import createmysql

app = Flask(__name__)

@app.context_processor  # 上下文渲染器，给所有html添加渲染参数
def inject_url():
    data = {
        "url_for": dated_url_for,
    }
    return data

def dated_url_for(endpoint, **values):
    filename = None
    if endpoint == 'register':
        return url_for(endpoint, **values)
    if endpoint == 'retriever':
        return url_for(endpoint, **values)
    if endpoint == 'static':
        filename = values.get('filename', None)
    if filename:
        file_path = os.path.join(app.root_path, endpoint, filename)
        values['v'] = int(os.stat(file_path).st_mtime)  # 取文件最后修改时间的时间戳，文件不更新，则可用缓存
        return url_for(endpoint, **values)

@app.route('/',methods=['get'])
def index():
    return render_template('index.html')

@app.route('/retrieve',methods=['get'])
def retriever():
    phonenumber = request.values.get("phonenumber")
    mysql = createmysql.Mysql()
    results = mysql.find_count_by_phonenumber(phonenumber)
    tmpHtml = "<div class='zhanghao'>"
    if(len(results) > 0):
        tmpHtml += '<div style="font-size:25px;padding: 20px 0 20px 0"> 找到以下帐号:</div>'
        for r in results:
            tmpHtml = tmpHtml + '<p style="font-size:20px;padding: 10px 0 10px 50px;">' + r[0] + '</p>'
    else:
        tmpHtml += '<div style="font-size:40px;padding: 40px 0 20px 34%;"> 未找到帐号</div>'
    tmpHtml += "</div>"
    return jsonify({"msg": tmpHtml})

@app.route('/regist', methods=['POST'], strict_slashes=False)
def register():
    msg = {}
    mysql = createmysql.Mysql()
    username = str(int(time.time()) + 1100000000)
    while(mysql.find_count(username)):
        username = str(int(time.time()) + 1100000000)
    password = request.form.get('password')
    nickname = request.form.get('nickname')
    phonenumber = request.form.get('phonenumber')
    msg['username'] = username
    msg['password'] = password
    msg['nickname'] = nickname
    msg['phonenumber'] = phonenumber
    msg['online'] = 0
    mysql.creat(msg)
    return_list ={}
    return_list['username'] = username
    return jsonify({"msg": return_list})

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.run()
