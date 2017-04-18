import React from 'react'
import { Card, Textfield, Button } from 'react-mdl'
if (process.env.BROWSER) {
    require("./EditMemberInfo.scss")
}

/*
	<div className="row">
		<div className="th">密　　碼</div><div className="td"><a href="">修改密碼</a></div>
	</div>
*/
const EditMemberInfo = (props) => {
    return (
        <div className="editMemberInfo">
			<h2 className="title">修改會員資料</h2>
			<Card shadow={2} className=" form">
					<div className="row">
						<div className="th">帳　　號</div><div className="td">admin</div>
					</div>
					<div className="row">
						<div className="th">姓　　名</div>
						<div className="td">
							<Textfield label="請輸入" />
					  	</div>
					</div>
					<div className="row">
						<div className="th">聯絡電話</div>
						<div className="td">
							<Textfield label="請輸入" />
						</div>
					</div>
					<div className="row">
						<div className="th">電子郵件</div>
						<div className="td">
							<Textfield label="請輸入" />
						</div>
					</div>
					<div className="row buttonField" >					
							<Button raised>確定</Button>
							<Button raised>取消</Button>
					</div>
			</Card>
		</div>
    )
}

export default EditMemberInfo
