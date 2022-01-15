class Auth {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (auth != 1) {
			window.location.replace("/");
		} else {
            document.querySelector("body").style.display = "block";
		}
	}

	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("/");
	}
}

// function query() {
//     var adVarWChar = 202;
//     var adParamInput = 1;
//     var pad = "C:\\Users\\azi!z\\Desktop\\Project\\Test.accdb";
//     var cn = new ActiveXObject("ADODB.Connection");
//     var strConn = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + pad;
//     cn.Open(strConn);
//     var cm = new ActiveXObject("ADODB.Command");
//     cm.ActiveConnection = cn;
//     cm.CommandText = "SELECT * FROM ImportFromExcel where TestCase LIKE ?";
//     cm.Parameters.Append(cm.CreateParameter(
//             "?",
//             adVarWChar,
//             adParamInput,
//             255,
//             "%" + document.getElementById("searchTerm").value + "%"));
//     var rs = cm.Execute();  // returns ADODB.Recordset object

//     var table = '';
//     var tableRow = '';
//     var headings = true;

//     if (rs.EOF) {
//         document.write("<p>No data found.</p>");
//     } else {
//         while (!rs.EOF) {
//           if (headings) {
//             tableRow = '';
//             for (var i = 0; i < rs.fields.count; i++) {
//               switch (i + 1) {
//                 case 1:
//                 case 3:
//                 case 4:
//                 case 6:
//                 case 8:
//                 case 9:
//                   tableRow = tableRow + '<td>' + rs.fields(i).name + '</td>';
//                   break;
//               }
//             }
//             tableRow = '<tr>' + tableRow + '</tr>';
//             table = table + tableRow;
//             headings = false;
//           }
//           tableRow = '';
//           for (var i = 0; i < rs.fields.count; i++) {
//               switch (i + 1) {
//                 case 1:
//                 case 3:
//                 case 4:
//                 case 6:
//                 case 8:
//                 case 9:
//                   tableRow = tableRow + '<td>' + rs.fields(i).value + '</td>';
//                   break;
//               }
//           }
//           tableRow = '<tr>' + tableRow + '</tr>';
//           table = table + tableRow;
//           rs.MoveNext();
//         }
//         document.write('<table>' + table + '</table>');
//     }
//     rs.Close();
//     cn.Close();
// }