<template>
	<div>


		<el-row>
			<el-button type="primary" icon="el-icon-plus">新建流程</el-button>
			<el-button type="primary" icon="el-icon-upload">导入流程</el-button>
		</el-row>
		<!-- 流程表 -->
		<el-table :data="tableData" style="width: 98%" :header-cell-style="{background:'#f7f7f7',color:'#666666'}">
			<el-table-column fixed prop="key" label="流程标识" width="120" align="center">
			</el-table-column>
			<el-table-column prop="name" label="流程名称" align="center">
			</el-table-column>
			<el-table-column prop="category" label="流程分类" align="center">
					<el-tag>默认</el-tag>
			</el-table-column>
			<!-- <el-table-column prop="tableInfo" label="表单信息" align="center">
			</el-table-column> -->
			<el-table-column prop="deployTime" label="创建时间" align="center">
			</el-table-column>
			<el-table-column label="最新部署的流程定义" align="center">
				<el-table-column prop="version" label="流程版本" width="80" align="center">
				</el-table-column>
				<el-table-column prop="rev" label="流程状态" width="80" align="center">
					<template slot-scope="scope">
						<!-- <el-switch v-model="scope.row.rev" @change="change(scope.row)" active-value="1"
							inactive-value="0" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch> -->
						<span>{{
							scope.row.rev == "0"
							? "挂起"
							: scope.row.rev == "1"
							? "激活"
							: "完成"
							}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="deployTime" label="部署时间" width="160" align="center">
				</el-table-column>
			</el-table-column>
			<el-table-column label="操作" align="center" width="400" fixed="right">
				<template slot-scope="scope">
					<el-button @click="changeFlow" type="text" size="small">修改流程</el-button>
					<el-button @click="designFlow" type="text" size="small">设计流程</el-button>
					<el-button @click="divideRule" type="text" size="small">分配规则</el-button>
					<el-button @click="startProc" type="text" size="small">发布流程</el-button>
					<el-button @click="flowDef" type="text" size="small">流程定义</el-button>
					<el-popconfirm title="确定删除吗?" @confirm="del(scope.row)">
						<el-button slot="reference" type="text" size="small">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>



<script>
	export default {
		name: 'model',
		data() {
			return {
				queryForm: {

				},
				tableData: []
			}
		},
		methods: {
			query() {
				this.$axios({
					method: 'post',
					url: 'apis/process/procdefList',
					data: this.queryForm
				}).then(res => {
					if (res.data.success) {
						this.tableData = res.data.obj;

					} else {
						this.$message.error(res.data.msg);
					}
				}).catch(err => {
					console.info(err)
				});
			},
			changeFlow() {

			},

		},
		created() {
			this.query();
		}
	}
</script>


<style>
	.el-row {
		margin-bottom: 20px;
		}
</style>
