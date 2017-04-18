import React from 'react'
import { Card,Button,Textfield } from 'react-mdl'
if (process.env.BROWSER) {
    require("./EditPwd.scss")
}
const EditPwd = (props) => {
    return (
        <div className="editPwd">
			<h2 className="title">更換密碼</h2>
			<Card  shadow={2} className="form">
					<div className="row">
						<div className="th">帳　　號</div><div className="td">admin</div>
					</div>
					<div className="row">
						<div className="th">密　　碼</div>
						<div className="td">
							<Textfield label="請輸入" />
					  	</div>
					</div>
					<div className="row">
						<div className="th">再次確認</div>
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

export default EditPwd
