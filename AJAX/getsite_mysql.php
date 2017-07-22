<?php
	$q = isset($_GET["q"]) ? intval($_GET["q"]) : '';
	if(empty($q)){
		echo '请选择一个网站';
		exit;
	}

	$con = mysqli_connect('localhost','root','','ajax');
	if(!$con){
		die('数据库连接失败！' . mysqli_error($con));
	}

	mysqli_set_charset($con, "utf8");

	$sql = "SELECT * FROM ajax WHERE id = $q";

	$result = mysqli_query($con,$sql);

	echo "
		<table border='1'>
			<tr>
				<th>ID</th>
				<th>网站名</th>
				<th>网站 URL</th>
				<th>ALEXA 排名</th>
				<th>国家</th>
			</tr>
		
	";
	while($row = mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td>" . $row['id'] . "</td>";
		echo "<td>" . $row['name'] . "</td>";
		echo "<td>" . $row['url'] . "</td>";
		echo "<td>" . $row['alexa'] . "</td>";
		echo "<td>" . $row['country'] . "</td>";
		echo "</tr>";
	}
	echo "</table>";

	mysqli_close($con);
?>