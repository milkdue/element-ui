:::demo 一个多选级联选择的懒加载回显案例
```html
<div class="block-cascader-multiple-demo">
    <el-cascader
        ref="cascader"
        v-model="value"
        :options="options"
        :props="props"
        clearable
    ></el-cascader>
</div>

<script>
    const timeOutResolve = function(data, resolve, delay = 1000){
        setTimeout(() => resolve(data), delay);
    }
    export default {
        data(){
            return {
                props: {
                    lazy: true,
                    lazyLoad: this.lazyLoad,
                    leaf: 'leaf',
                    multiple: true,
                    checkStrictly: false,
                    loading: false
                },
                options: [],
                value: [
                    [1, 3, 8],
                    [1, 3, 9],
                    [1, 3, 10],
                    [1, 4, 11]
                ]
            }
        },
        methods: {
            lazyLoad(node, resolve){
                if(node.children && node.children.length){
                    resolve([]);
                    return;
                }
                if(node.level === 0){
                    timeOutResolve([
                        {
                            value: 1,
                            label: '东南',
                            leaf: false
                        },
                        {
                            value: 2,
                            label: '西北',
                            leaf: false
                        }
                    ], resolve);
                }else{
                    switch(node.value){
                        case 1:
                            timeOutResolve([
                                {
                                    value: 3,
                                    label: '上海',
                                    leaf: false
                                },
                                {
                                    value: 4,
                                    label: '江苏',
                                    leaf: false
                                },
                                {
                                    value: 5,
                                    label: '浙江',
                                    leaf: false
                                }
                            ], resolve);
                            break;
                        case 2:
                            timeOutResolve([
                                {
                                    value: 6,
                                    label: '陕西',
                                    leaf: false
                                },
                                {
                                    value: 7,
                                    label: '新疆维吾尔族自治区',
                                    leaf: false
                                }
                            ], resolve);
                            break;
                        case 3:
                            timeOutResolve([
                                { value: 8, label: '普陀', leaf: true },
                                { value: 9, label: '黄埔', leaf: true },
                                { value: 10, label: '徐汇', leaf: true }
                            ], resolve);
                            break;
                        case 4:
                            timeOutResolve([
                                { value: 11, label: '南京', leaf: true },
                                { value: 12, label: '苏州', leaf: true },
                                { value: 13, label: '无锡', leaf: true }
                            ], resolve);
                            break;
                        case 5:
                            timeOutResolve([
                                { value: 14, label: '杭州', leaf: true },
                                { value: 15, label: '宁波', leaf: true },
                                { value: 16, label: '嘉兴', leaf: true }
                            ], resolve);
                            break;
                        case 6:
                            timeOutResolve([
                                { value: 19, label: '西安', leaf: true },
                                { value: 20, label: '延安', leaf: true }
                            ], resolve);
                            break;
                        case 7:
                            timeOutResolve([
                                { value: 22, label: '乌鲁木齐', leaf: true },
                                { value: 23, label: '克拉玛依', leaf: true }
                            ], resolve);
                            break;
                        default:
                            timeOutResolve([], resolve);
                            break;
                    }
                }
            }
        }
    }
</script>
```