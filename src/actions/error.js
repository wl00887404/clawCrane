export const catchError=(error)=>{
	return {
		type:"catchError",
		error
	}
}