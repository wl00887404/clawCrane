import React from 'react'
import { Card, Button, Textfield } from 'react-mdl'
if (process.env.BROWSER) {
    require("./ReportBug.scss")
}
const ReportBug = (props) => {
    return (
        <div className="reportBug">
			<h2 className="title">系統問題回報</h2>
			<Card  shadow={2} className="form">
					<div className="row">
						<Textfield label="主旨" floatingLabel />
					</div>
					<div className="row">
						<Textfield label="問題描述" rows= {10} expandable={false} />
					</div>
					<div className="row buttonField" >					
							<Button raised>確定</Button>
							<Button raised>取消</Button>

					</div>
			</Card>
		</div>
    )
}

export default ReportBug
