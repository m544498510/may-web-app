
define("home/states/states", ["angular"], function(e) {
    return e.module(["homeStates"], [])
}),
    define("home/cons/homeProductCons", ["common/helper/i18nHelper"], function(e) {
        var t = function() {
            var e = window.location.host;
            if (!e.match(/^.+\.aliyun\.|^aliyun\./))
                return ".com";
            var t = e.replace(/^.*\.aliyun|^aliyun/i, "");
            return t || (t = ".com"),
                t
        }();
        return {
            FLOW_UNITS: ["KB", "MB", "GB", "TB", "PB"],
            PRODUCT_LIST: {
                ecs: {
                    id: "ecs",
                    order: 1,
                    text: "云服务器",
                    "short": "ECS",
                    href: "http://console.aliyun.com/ecs/index.htm",
                    spm: "1",
                    unit: "台",
                    popover: "实例保有量"
                },
                slb: {
                    id: "slb",
                    order: 2,
                    text: "负载均衡",
                    "short": "SLB",
                    href: "http://slb.console.aliyun.com/",
                    spm: "2",
                    unit: "个",
                    popover: "实例保有量"
                },
                rds: {
                    id: "rds",
                    order: 3,
                    text: "关系型数据库",
                    "short": "RDS",
                    href: "http://rds.console.aliyun.com/",
                    spm: "3",
                    unit: "个",
                    popover: "实例保有量"
                },
                oss: {
                    id: "oss",
                    order: 4,
                    text: "开放存储服务",
                    "short": "OSS",
                    href: "http://oss.console.aliyun.com/console/index",
                    spm: "4",
                    unit: "GB",
                    popover: "所有bucket存储总大小"
                },
                cdn: {
                    id: "cdn",
                    order: 5,
                    text: "内容分发网络",
                    "short": "CDN",
                    href: "http://cdn.console.aliyun.com/",
                    spm: "5",
                    unit: "GB",
                    popover: "当月累计流量"
                },
                ots: {
                    id: "ots",
                    order: 6,
                    text: "结构化数据服务",
                    "short": "OTS",
                    href: "http://console.aliyun.com/ots/",
                    spm: "6",
                    unit: "次",
                    popover: "一天内读写总访问次数"
                },
                ocs: {
                    id: "ocs",
                    order: 7,
                    text: "开放缓存服务",
                    "short": "OCS",
                    href: "http://ocs.console.aliyun.com/",
                    spm: "7",
                    unit: "个",
                    popover: "实例保有量"
                },
                odps: {
                    id: "odps",
                    order: 8,
                    text: "开放数据处理服务",
                    "short": "ODPS",
                    href: "http://odps.console.aliyun.com/console/index",
                    spm: "8",
                    unit: "",
                    popover: ""
                },
                ace: {
                    id: "ace",
                    order: 9,
                    text: "云引擎",
                    "short": "ACE",
                    href: "http://ace.console.aliyun.com/",
                    hrefOld: "http://console.aliyun.com/ace/",
                    hrefText: "新版>>",
                    hrefOldText: "旧版>>",
                    spm: "9",
                    unit: "PV",
                    popover: "前一天PV"
                },
                yundun: {
                    id: "yundun",
                    order: 10,
                    text: "云盾",
                    "short": "",
                    href: "http://yundun.console.aliyun.com/",
                    spm: "10",
                    unit: "",
                    popover: "云盾为您成功拦截的攻击次数"
                },
                yunjiankong: {
                    id: "yunjiankong",
                    order: 11,
                    text: "云监控",
                    "short": "",
                    href: "http://console.aliyun.com/jiankong/",
                    spm: "11",
                    unit: "个",
                    popover: "监控点总数"
                },
                sls: {
                    id: "sls",
                    order: 12,
                    text: "简单日志服务",
                    "short": "SLS",
                    href: "http://sls.console.aliyun.com/",
                    spm: "12",
                    unit: "个",
                    popover: "Project个数"
                },
                mqs: {
                    id: "mqs",
                    order: 13,
                    text: "消息队列服务",
                    "short": "MQS",
                    href: "http://mqs.console.aliyun.com",
                    spm: "13",
                    unit: "",
                    popover: ""
                },
                oas: {
                    id: "oas",
                    order: 14,
                    text: "开放归档服务",
                    "short": "OAS",
                    href: "http://oas.console.aliyun" + t + "/console/index",
                    spm: "14",
                    unit: "",
                    popover: ""
                },
                opensearch: {
                    id: "opensearch",
                    order: 15,
                    text: "开放搜索服务",
                    "short": "",
                    href: "http://opensearch.console.aliyun.com",
                    spm: "15",
                    unit: "个",
                    popover: "拥有搜索app实例个数"
                },
                pts: {
                    id: "pts",
                    order: 16,
                    text: "性能测试服务",
                    "short": "PTS",
                    href: "http://pts.aliyun.com/aliyun",
                    spm: "16",
                    unit: "",
                    popover: ""
                },
                vpc: {
                    id: "vpc",
                    order: 17,
                    text: "专有网络",
                    "short": "VPC",
                    href: "http://home.console.aliyun" + t + "/vpcProtocol.html",
                    spm: "17"
                },
                toolsimage: {
                    id: "toolsimage",
                    order: 20,
                    text: "工具与镜像",
                    "short": "",
                    href: "http://market.aliyun.com/user/subscription/index.htm",
                    spm: "20",
                    unit: "",
                    popover: ""
                }
            },
            PRODUCT_OPERATIONS: {
                ecs: [{
                    text: "立即购买",
                    href: "http://buy.aliyun.com/",
                    iconName: "icon-buy",
                    target: "_blank",
                    spm: "1"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/ecs/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "2"
                }],
                ace: [{
                    text: "获取公测资格",
                    href: "http://i.aliyun.com/inviteapply?agent_id=78",
                    iconName: "icon-invite",
                    target: "_blank",
                    spm: "20"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/ace/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "21"
                }],
                rds: [{
                    text: "立即购买",
                    href: "http://buy.aliyun.com/rds",
                    iconName: "icon-buy",
                    target: "_blank",
                    spm: "8"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/rds/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "9"
                }],
                slb: [{
                    text: "立即购买",
                    href: "http://buy.aliyun.com/slb",
                    iconName: "icon-buy",
                    target: "_blank",
                    spm: "6"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/slb/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "7"
                }],
                oss: [{
                    text: "立即购买",
                    href: "http://buy.aliyun.com/oss",
                    iconName: "icon-buy",
                    target: "_blank",
                    spm: "10"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/oss/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "11"
                }],
                ots: [{
                    text: "获取公测资格",
                    href: "http://i.aliyun.com/inviteapply?agent_id=PjFAwl3VLvs=",
                    iconName: "icon-invite",
                    target: "_blank",
                    spm: "14"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/ots/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "15"
                }],
                yundun: [{
                    text: "立即开通",
                    href: "http://yundun.console.aliyun.com",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "2"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/yundun/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "3"
                }],
                yunjiankong: [{
                    text: "立即开通",
                    href: "http://console.aliyun.com/jiankong/index.html",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "22"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/jiankong/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "23"
                }],
                ocs: [{
                    text: "立即购买",
                    href: "http://buy.aliyun.com/ocs",
                    iconName: "icon-buy",
                    target: "_blank",
                    spm: "16"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/ocs/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "17"
                }],
                cdn: [{
                    text: "立即开通",
                    href: "http://buy.aliyun.com/cdn",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "12"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/cdn/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "13"
                }],
                odps: [{
                    text: "立即开通",
                    href: "http://buy.aliyun.com/odps",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "18"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/odps/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "19"
                }],
                sls: [{
                    text: "获取公测资格",
                    href: "http://i.aliyun.com/inviteapply?agent_id=84",
                    iconName: "icon-invite",
                    target: "_blank",
                    spm: "20"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/sls/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "21"
                }],
                mqs: [{
                    text: "立即开通",
                    href: "http://buy.aliyun.com/mqs",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "22"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/mqs/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "23"
                }],
                oas: [{
                    text: "获取公测资格",
                    href: "http://i.aliyun" + t + "/inviteapply?agent_id=83",
                    iconName: "icon-invite",
                    target: "_blank",
                    spm: "24"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/oas/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "25"
                }],
                vpc: [{
                    text: "立即开通",
                    href: "http://www.aliyun.com/product/vpc/",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "26"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/vpc/",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "27"
                }],
                opensearch: [{
                    text: "立即开通",
                    href: "http://buy.aliyun.com/product/opensearch",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "26"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/opensearch",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "27"
                }],
                pts: [{
                    text: "立即开通",
                    href: "http://buy.aliyun.com/pts",
                    iconName: "icon-unlock",
                    target: "_blank",
                    spm: "28"
                }, {
                    text: "产品详情",
                    href: "http://www.aliyun.com/product/pts",
                    iconName: "icon-detail",
                    target: "_blank",
                    spm: "29"
                }]
            },
            PRODUCT_UNITS: "个",
            PRODUCT_OPTS: [{
                text: e.i18n("home.product.hv.buy"),
                href: "http://buy.aliyun.com/",
                iconName: "icon-buy",
                target: "_blank"
            }, {
                text: e.i18n("home.product.hv.detail"),
                href: "http://www.aliyun.com/product/",
                iconName: "icon-detail",
                target: "_blank"
            }],
            PRODUCT_CUSTOM_OPTS: {
                emr: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "https://i.aliyun.com/inviteapply?agent_id=117",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "http://www.aliyun.com/product/emapreduce",
                    iconName: "icon-detail",
                    target: "_blank"
                }],
                ace: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "http://ace.console.aliyun.com/forestage.htm#/app/create/prepay",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "https://www.aliyun.com/product/ace",
                    iconName: "icon-detail",
                    target: "_blank"
                }],
                dm: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "http://buy.aliyun.com/dm",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "https://www.aliyun.com/product/directmail",
                    iconName: "icon-detail",
                    target: "_blank"
                }],
                dds: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "https://i.aliyun.com/inviteapply?agent_id=124",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "https://www.aliyun.com/product/mongodb",
                    iconName: "icon-detail",
                    target: "_blank"
                }],
                cs: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "http://buy.aliyun.com/cs",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "https://www.aliyun.com/product/containerservice",
                    iconName: "icon-detail",
                    target: "_blank"
                }],
                ip: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "http://buy.aliyun.com/eip",
                    iconName: "icon-unlock",
                    target: "_blank"
                }],
                ri: [{
                    text: e.i18n("home.product.hv.buy"),
                    href: "https://vpc.console.aliyun.com/expressConnect/#/buy/routerInterface",
                    iconName: "icon-unlock",
                    target: "_blank"
                }, {
                    text: e.i18n("home.product.hv.detail"),
                    href: "http://www.aliyun.com/product/expressconnect/",
                    iconName: "icon-detail",
                    target: "_blank"
                }]
            },
            categories: [{
                name: "弹性计算",
                products: [{
                    helpCategoryId: "8314827",
                    icon: "icon-ecs",
                    link: "http://ecs.console.aliyun.com",
                    name: "云服务器ECS",
                    openStatus: !0,
                    productId: "ecs"
                }, {
                    helpCategoryId: "",
                    icon: "icon-ace",
                    link: "http://ace.console.aliyun.com",
                    name: "云引擎ACE",
                    openStatus: !0,
                    productId: "ace"
                }, {
                    icon: "icon-ess",
                    link: "http://ess.console.aliyun.com",
                    name: "弹性伸缩",
                    openStatus: !0,
                    productId: "ess"
                }]
            }, {
                name: "数据库",
                products: [{
                    icon: "icon-rds",
                    link: "http://rdsnew.console.aliyun.com",
                    name: "云数据库RDS",
                    openStatus: !0,
                    productId: "rds"
                }, {
                    helpCategoryId: "8315109",
                    icon: "icon-redisa",
                    link: "http://kvstore.console.aliyun.com",
                    name: "键值存储KVStore",
                    openStatus: !0,
                    productId: "kvstore"
                }, {
                    helpCategoryId: "8315004",
                    icon: "icon-ots",
                    link: "http://ots.console.aliyun.com",
                    name: "开放结构化数据服务OTS",
                    openStatus: !0,
                    productId: "ots"
                }, {
                    helpCategoryId: "8314987",
                    icon: "icon-ocs",
                    link: "http://ocs.console.aliyun.com",
                    name: "开放缓存服务OCS",
                    openStatus: !0,
                    productId: "ocs"
                }, {
                    helpCategoryId: "8315081",
                    icon: "icon-ads",
                    link: "http://ads.console.aliyun.com",
                    name: "分析型数据库",
                    openStatus: !0,
                    productId: "ads"
                }, {
                    icon: "icon-dts",
                    link: "http://dts.console.aliyun.com",
                    name: "数据传输",
                    openStatus: !0,
                    productId: "dts"
                }]
            }, {
                name: "存储与CDN",
                products: [{
                    helpCategoryId: "8314910",
                    icon: "icon-oss",
                    link: "http://oss.console.aliyun.com/index",
                    name: "对象存储OSS",
                    openStatus: !0,
                    productId: "oss"
                }, {
                    helpCategoryId: "8314980",
                    icon: "icon-oas",
                    link: "http://oas.console.aliyun.com/console/index",
                    name: "归档存储",
                    openStatus: !0,
                    productId: "oas"
                }, {
                    helpCategoryId: "8315016",
                    icon: "icon-mqs",
                    link: "http://mns.console.aliyun.com",
                    name: "消息服务",
                    openStatus: !0,
                    productId: "mns"
                }, {
                    helpCategoryId: "8314936",
                    icon: "icon-cdn",
                    link: "http://cdn.console.aliyun.com",
                    name: "CDN",
                    openStatus: !0,
                    productId: "cdn"
                }]
            }, {
                name: "网络",
                products: [{
                    helpCategoryId: "8314871",
                    icon: "icon-slb",
                    link: "http://slbnew.console.aliyun.com",
                    name: "负载均衡",
                    openStatus: !0,
                    productId: "slb"
                }, {
                    helpCategoryId: "",
                    icon: "icon-vpc",
                    link: "http://vpc.console.aliyun.com",
                    name: "专有网络VPC",
                    openStatus: !0,
                    productId: "vpc"
                }, {
                    icon: "icon-logo2",
                    link: "http://ip.console.aliyun.com",
                    name: "弹性公网IP",
                    openStatus: !0,
                    productId: "ip"
                }]
            }, {
                name: "大规模计算",
                products: [{
                    helpCategoryId: "8314999",
                    icon: "icon-odps",
                    link: "http://odps.console.aliyun.com",
                    name: "开放数据处理服务ODPS",
                    openStatus: !0,
                    productId: "odps"
                }, {
                    helpCategoryId: "9001010",
                    icon: "icon-batchcompute",
                    link: "http://batchcompute.console.aliyun.com",
                    name: "批量计算",
                    openStatus: !0,
                    productId: "batchcompute"
                }, {
                    helpCategoryId: "",
                    icon: "icon-dpc",
                    link: "http://dpc.console.aliyun.com",
                    name: "采云间",
                    openStatus: !0,
                    productId: "dpc",
                    shortName: "DPC"
                }]
            }, {
                name: "安全与管理",
                products: [{
                    helpCategoryId: "8314941",
                    icon: "icon-yundun",
                    link: "http://yundun.console.aliyun.com",
                    name: "云盾",
                    openStatus: !0,
                    productId: "yundun"
                }, {
                    helpCategoryId: "8314972",
                    icon: "icon-yunjiankong",
                    link: "http://cms.console.aliyun.com",
                    name: "云监控",
                    openStatus: !0,
                    productId: "cms"
                }, {
                    helpCategoryId: "",
                    icon: "icon-ram",
                    link: "http://ram.console.aliyun.com",
                    name: "访问控制",
                    openStatus: !0,
                    productId: "ram"
                }]
            }, {
                name: "应用服务",
                products: [{
                    helpCategoryId: "8314976",
                    icon: "icon-sls",
                    link: "http://sls.console.aliyun.com",
                    name: "日志服务",
                    openStatus: !0,
                    productId: "sls"
                }, {
                    helpCategoryId: "",
                    icon: "icon-opensearch",
                    link: "http://opensearch.console.aliyun.com",
                    name: "开放搜索",
                    openStatus: !0,
                    productId: "opensearch"
                }, {
                    helpCategoryId: "",
                    icon: "icon-mts",
                    link: "http://mts.console.aliyun.com",
                    name: "媒体转码",
                    openStatus: !0,
                    productId: "mts"
                }, {
                    helpCategoryId: "",
                    icon: "icon-pts",
                    link: "http://pts.aliyun.com/aliyun/",
                    name: "性能测试",
                    openStatus: !0,
                    productId: "pts"
                }, {
                    helpCategoryId: "9005959",
                    icon: "icon-mas",
                    link: "http://man.console.aliyun.com/aliyun/masAppList.htm?login=true",
                    name: "移动数据分析",
                    openStatus: !0,
                    productId: "man"
                }]
            }, {
                name: "互联网中间件",
                products: [{
                    helpCategoryId: "",
                    icon: "icon-edas",
                    link: "http://edas.console.aliyun.com",
                    name: "企业级分布式应用服务EDAS",
                    openStatus: !0,
                    productId: "edas"
                }, {
                    helpCategoryId: "",
                    icon: "icon-ons",
                    link: "http://ons.console.aliyun.com",
                    name: "消息队列",
                    openStatus: !0,
                    productId: "ons"
                }, {
                    helpCategoryId: "8315099",
                    icon: "icon-drds",
                    link: "http://drds.console.aliyun.com",
                    name: "分布式关系型数据库DRDS",
                    openStatus: !0,
                    productId: "drds"
                }]
            }, {
                name: "域名与网站（万网）",
                products: [{
                    helpCategoryId: "9002814",
                    icon: "icon-yuming",
                    link: "http://netcn.console.aliyun.com/core/domain/list",
                    name: "域名",
                    openStatus: !0,
                    productId: "domain"
                }, {
                    helpCategoryId: "9002814",
                    icon: "icon-yunjiexi",
                    link: "http://netcn.console.aliyun.com/core/domain/tclist",
                    name: "云解析",
                    openStatus: !0,
                    productId: "dns"
                }, {
                    helpCategoryId: "9002853",
                    icon: "icon-yunxunizhuji",
                    link: "http://netcn.console.aliyun.com/core/host/list2",
                    name: "云虚拟主机",
                    openStatus: !0,
                    productId: "host"
                }, {
                    helpCategoryId: "",
                    icon: "icon-qiyeyouxiang",
                    link: "http://netcn.console.aliyun.com/core/mail/list",
                    name: "企业邮箱",
                    openStatus: !0,
                    productId: "mail"
                }, {
                    helpCategoryId: "",
                    icon: "icon-wo-sitebuild",
                    link: "http://netcn.console.aliyun.com/core/website/list",
                    name: "标准建站",
                    openStatus: !0,
                    productId: "website"
                }]
            }, {
                name: "其他",
                products: [{
                    icon: "icon-toolsimage",
                    link: "http://market.console.aliyun.com",
                    name: "云市场",
                    openStatus: !0,
                    productId: "market"
                }]
            }]
        }
    }),
    define("home/services/services", ["angular"], function(e) {
        return e.module(["homeServices"], [])
    }),
    define("home/services/homeServices", ["./services", "home/cons/homeCons", "common/services/aliyunHttpHandler"], function(e, t) {
        e.factory("homeRequest", ["aliyun.console.request", "$http", function(e, t) {
            var n = e.request
                , r = {
                getHomeAccountInfo: function(e) {
                    return n("/home/info/account.json", e)
                },
                getHomeTodoInfo: function(e) {
                    return n("/home/info/todo.json", e)
                },
                getProductList: function(e) {
                    return n("/center/product/list.json", e)
                },
                getHomeInfo: function(e) {
                    return n("/product/list.json", e)
                },
                getUserAccountInfo: function(e) {
                    return n("/center/user.json", e)
                },
                getUndoInfo: function(e) {
                    return n("/center/undo.json", e)
                },
                getProductsData: function(e) {
                    return n("/product/query.json", e)
                },
                readGuide: function(e) {
                    return n("/center/readGuide.json", e)
                },
                netcnPartnerNeedSignAgreement: function(e) {
                    return n("/center/netcn/partnerNeedSignAgreement.json", e)
                },
                netcnPartnerSignAgreement: function(e) {
                    return e || (e = {}),
                        e.successMessage = "协议签订请求成功",
                        n("/center/netcn/partnerSignAgreement.json", e)
                },
                getPartnerNotice: function(e) {
                    return n("/center/netcn/partnerNotice.json", e)
                }
            };
            return r
        }
        ])
    }),
    define("home/controllers/homeController", ["./controllers", "home/utils/homeVariablesService", "home/cons/homeLinkCons", "home/cons/homeProductCons", "common/helper/responsePreHandler", "../cons/homeCons", "../services/homeServices"], function(e, t, n, r, i, s) {
        e.controller("homeController", ["$scope", "$injector", "homeRequest", "$timeout", "$rootScope", function(e, t, o, u, a) {
            function h() {
                o.getHomeAccountInfo().then(function(r) {
                    var s = i.responsePreHandler(r, t);
                    s && angular.isFunction(s.then) == 0 && (e.accountInfo = s || {},
                        e.accountInfo.head ? e.accountInfo.head = n.ACCOUNT_HEAD_IMAGE_LINK + e.accountInfo.head : e.accountInfo.head = "//g.alicdn.com/aliyun/home/1.6.5/styles/home/images/header.png")
                })
            }
            function p() {
                o.getHomeTodoInfo().then(function(n) {
                    var r = i.responsePreHandler(n, t);
                    r && angular.isFunction(r.then) == 0 && (e.todo = d(r))
                })
            }
            function d(e) {
                var t = e.renew
                    , n = 0
                    , r = !1;
                if (t.ecsExpiringCountBy1d > 0 || t.rdsExpiringCountBy1d || t.ecsExpiredCount || t.rdsExpiredCount)
                    r = !0;
                return delete t.ecsExpiringCountBy1d,
                    delete t.rdsExpiringCountBy1d,
                    angular.forEach(t, function(e, t) {
                        e > 0 && (n += e)
                    }),
                    t.total = n,
                    t.showResWarning = r,
                    e
            }
            function v(t, n) {
                var r = m(t);
                e.openProducts = r.openList,
                    e.notopenProducts = r.notopenList,
                    e.yundunInfo = r.yundunInfo,
                    e.notopenShow = r.notopenShow
            }
            function m(t) {
                var n = [], r = [], i = [], s, o = !1, u = t.length;
                return angular.forEach(t, function(t, a) {
                    var f = {
                        text: t.text,
                        products: []
                    };
                    angular.isArray(t.products) && angular.forEach(t.products, function(t, r) {
                        !s && t.id == "yundun" && (s = t),
                            t.id != "vpc" ? t.status ? n.push(t) : (!o && (o = !0),
                                f.products.push(t)) : e.bid == "bjzwy" ? n.push(t) : e.bid != "jbp" && (t.status ? n.push(t) : (!o && (o = !0),
                                f.products.push(t)))
                    }),
                    f.products.length > 0 && i.push(f);
                    if (i.length == 2 || a == u - 1)
                        r.push(i),
                            i = []
                }),
                {
                    openList: n,
                    notopenList: r,
                    notopenShow: o,
                    yundunInfo: s
                }
            }
            function g(e) {
                e = e || {},
                    o.getProductsData(e).then(function(e) {
                        var t = e.data;
                        t && t.code == "200" && y(t.data)
                    })
            }
            function y(t) {
                if (!t)
                    return;
                var n = t.yundun
                    , r = t.oss
                    , i = t.cdn;
                n && (e.yundunData = n,
                    e.yundunData.protectedTimes = parseInt(e.yundunData.protectedTimes)),
                r && (t.oss = {
                    count: r.data,
                    unit: r.quantifier && r.quantifier.toUpperCase()
                }),
                i && (t.cdn = b(i.count)),
                t.jiankong && (t.cms = t.jiankong),
                    e.productsData ? angular.forEach(t, function(t, n) {
                        e.productsData[n] = t
                    }) : e.productsData = t
            }
            function b(e) {
                if (e == -1)
                    return e;
                var t = 0;
                e = parseFloat(e);
                while (Math.abs(e) >= 1024) {
                    e /= 1024,
                        t++;
                    if (t == 4)
                        break
                }
                return e = Math.floor(e * 100) / 100,
                {
                    count: e,
                    unit: l[t]
                }
            }
            function w() {
                t.invoke(["aliyunDialog", function(e) {
                    e.showDialogByUrl("scripts/home/partials/homeGreenhandGuide.html", S, {
                        windowClass: "home-greenhand"
                    })
                }
                ])
            }
            function E() {
                t.invoke(["aliyunDialog", function(e) {
                    e.showDialogByUrl("scripts/home/partials/homeGreenhandNetcnGuide.html", S, {
                        windowClass: "home-greenhand-netcn",
                        type: "netcn"
                    })
                }
                ])
            }
            function S(e) {
                e.closeHandler = function() {
                    o.readGuide({
                        params: {
                            status: !1,
                            type: e._passedObject && e._passedObject.type
                        }
                    }).then(function(e) {
                        i.responsePreHandler(e, t)
                    }),
                        e.close()
                }
                    ,
                    e.currentIndex = 1
            }
            function x() {
                o.netcnPartnerNeedSignAgreement().then(function(n) {
                    var r = i.responsePreHandler(n, t);
                    r && angular.isFunction(r.then) == 0 && (e.netcnInfo = r,
                        T(r, !1))
                })
            }
            function T(e, n) {
                function s(e) {
                    e.model = {
                        id: e._passedObject.id,
                        level: e._passedObject.level,
                        agreement: !1,
                        isJustView: n
                    },
                        e.confirm = function(n) {
                            n || o.netcnPartnerSignAgreement().then(function(e) {
                                i.responsePreHandler(e, t)
                            }),
                                e.close()
                        }
                }
                if (!e)
                    return;
                var r = "scripts/home/partials/homeNetcnSignAgreement.html";
                (n || e.needSign) && t.invoke(["aliyunDialog", function(t) {
                    t.showDialogByUrl(r, s, e)
                }
                ])
            }
            function N() {
                o.getPartnerNotice().then(function(n) {
                    var r = i.responsePreHandler(n, t);
                    r && angular.isFunction(r.then) == 0 && (e.partnerNotice = r)
                })
            }
            function C() {
                var n = {
                    params: {}
                }
                    , s = O();
                s && (n.params.lang = s),
                    o.getProductList(n).then(function(n) {
                        var s = i.responsePreHandler(n, t, !1, !0);
                        s && angular.isFunction(s.then) == 0 ? e.productInfo = k(s) : e.productInfo = k({
                            categories: r.categories
                        })
                    })
            }
            function k(t) {
                var n = []
                    , r = []
                    , i = t.categories || t
                    , s = t.productStatus;
                return t && angular.forEach(i, function(t, i) {
                    var o = []
                        , u = [];
                    t && t.products && (s.emr = !0,
                        angular.forEach(t.products, function(t, n) {
                            var r = !0;
                            s && s[t.productId] === !1 && (r = !1),
                            ["market", "cdn", "kvstore", "ocs", "ots", "dds", "drds", "edas", "ip"].indexOf(t.productId) != -1 && (r = !0),
                                r || e.isSubAccount ? o.push(t) : (t.showOpts = ["domain", "mail", "website", "dns", "host", "cms", "yundun", "ews", "hpc"].indexOf(t.productId) == -1,
                                    u.push(t)),
                            t.productId == "yundun" && (e.yundunInfo = t)
                        })),
                    o.length > 0 && n.push({
                        name: t.name,
                        products: o
                    }),
                    u.length > 0 && r.push({
                        name: t.name,
                        products: u
                    })
                }),
                {
                    openList: f ? A(n, 3) : A(n, 4),
                    notopenList: f ? A(r, 3) : A(r, 4)
                }
            }
            function L(e) {
                var t = []
                    , n = []
                    , r = e.length;
                return angular.forEach(e, function(e, i) {
                    n.push(e);
                    if (n.length == 2 || i == r - 1)
                        t.push(n),
                            n = []
                }),
                    t
            }
            function A(e, t) {
                var n = [];
                if (!(t && t > 0) || !e || e.length == 0)
                    return [];
                for (var r = 0; r < t; r++)
                    n.push([]);
                return angular.forEach(e, function(e, r) {
                    var i = r % t;
                    n[i].push(e)
                }),
                    n
            }
            function O() {
                var e = window.location.search, t = e.indexOf("?"), n;
                if (t != -1) {
                    e = e.substring(t + 1);
                    var r = e.split("&");
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i]
                            , o = s.indexOf("lang=");
                        if (o == 0) {
                            n = s.substring(o + 5);
                            break
                        }
                    }
                }
                return n
            }
            e.locale = window.ALIYUN_HOME_CONSOLE_CONFIG.local || "zh";
            var f = e.isIntlUser = window.ALIYUN_HOME_CONSOLE_CONFIG.isIntlUser || !1;
            e.homeConfig = {
                isFinanceUser: window.ALIYUN_HOME_CONSOLE_CONFIG.isFinanceUser
            };
            var l = r.FLOW_UNITS;
            e.aceInfo = s.ACE_INFO,
                e.homeLinkCons = n,
                e.netcnSingAgreement = T,
                e.isSubAccount = window.ALIYUN_HOME_CONSOLE_CONFIG.isSubAccount || window.ALIYUN_HOME_CONSOLE_CONFIG.isStsAccount,
                e.productConfig = {
                    defaultUnit: r.PRODUCT_UNITS,
                    defaultProductOpts: r.PRODUCT_OPTS,
                    productOpts: r.PRODUCT_CUSTOM_OPTS
                },
                e.showNotice = !0;
            var c = e.homeInfo = {
                USER_OPTS: e.isIntlUser ? s.USER_OPTS_INTL : s.USER_OPTS,
                RECHARGE_LINK: n.EXPENSE_RECHARGE_LINK,
                RENEW_LINK: n.EXPENSE_RENEW_LINK,
                RENEW_RDS_LINK: n.EXPENSE_RENEW_RDS_LINK,
                WORKORDER_LINK: n.EXPENSE_WORKORDER_LINK,
                COUPON_LINK: n.EXPENSE_COUPON_LINK
            };
            C(),
                g(),
                h(),
                p(),
                e.isNetcnPartner = ALIYUN_HOME_CONSOLE_CONFIG.isNetcnPartner,
            e.isNetcnPartner && (N(),
                x()),
                e.refreshProductData = function(t) {
                    g({
                        params: {
                            products: t
                        }
                    })
                }
                ,
                e.$on("refreshProductData", function(e, t) {
                    t && t.products && refreshProductData(t.products)
                })
        }
        ])
    }),
    define("home/states/home", ["./states", "home/cons/homeCons", "home/controllers/homeController"], function(e, t) {
        e.config(["$stateProvider", "$urlRouterProvider", function(e, n) {
            n.otherwise("/"),
                e.state("home", {
                    url: "/",
                    controller: "homeController",
                    templateUrl: t.VIEW_PATH + "home.html"
                })
        }
        ])
    }),
    define("home/states/_base", ["./states", "./home"], function() {}),
    define("home/services/_base", ["./services"], function() {}),
    define("home/directives/directives", ["angular"], function(e) {
        return e.module(["homeDirectives"], [])
    }),
    define("home/directives/homeAccountBalance", ["./directives"], function(e) {
        e.directive("homeAccountBalance", function() {
            return {
                restrict: "A",
                scope: {
                    accountInfo: "="
                },
                templateUrl: "scripts/home/partials/homeAccountBalance.html",
                link: function(e, t, n) {
                    e.showUnclearAmount = !1,
                        e.$watch("accountInfo", function(t) {
                            if (t) {
                                var n = e.amount = t.balanceAmount;
                                e.unclearAmount = t.amountOwed;
                                var r = n.indexOf("."), i, s;
                                r !== -1 ? (i = n.substring(0, r),
                                    s = n.substring(r)) : (i = n,
                                    s = ".00"),
                                parseInt(e.unclearAmount) > 0 && (n === "0.00" || n === "0") && (e.showUnclearAmount = !0,
                                    i = "0",
                                    s = ".00"),
                                    e.beforePoint = i,
                                    e.afterPoint = s
                            }
                        })
                }
            }
        })
    }),
    define("home/directives/homeAccountBalanceOld", ["./directives"], function(e) {
        e.directive("homeAccountBalanceOld", function() {
            return {
                restrict: "A",
                templateUrl: "scripts/home/partials/homeAccountBalanceOld.html",
                link: function(e, t, n) {
                    n.$observe("homeAccountBalanceOld", function(t) {
                        if (t) {
                            var n = t.indexOf(".");
                            n != -1 ? (e.beforePoint = t.substring(0, n),
                                e.afterPoint = t.substring(n)) : (e.beforePoint = t,
                                e.afterPoint = ".00")
                        }
                    })
                }
            }
        })
    }),
    define("home/directives/homeWithholdingAction", ["app", "../cons/homeCons"], function(e, t) {
        e.directive("homeAlipayWithholdingAction", function() {
            return {
                restrict: "AM",
                scope: {
                    withholdingStatus: "="
                },
                templateUrl: "scripts/home/partials/homeWithholdingAction.html",
                transclude: !1,
                replace: !0,
                link: function(e, n, r, i) {
                    var s = t.WITHHOLDING_CONS;
                    e.$watch("withholdingStatus", function(t) {
                        angular.isDefined(t) && (e.config = s[t])
                    })
                }
            }
        })
    }),
    define("home/directives/homeYundunActions", ["./directives", "../cons/homeCons"], function(e, t) {
        var n = t.YUNDUN_CONS;
        e.directive("homeYundunActions", function() {
            return {
                restrict: "A",
                scope: {
                    yundunData: "=",
                    yundunInfo: "="
                },
                templateUrl: "scripts/home/partials/homeYundunActions.html",
                link: function(e, t, r) {
                    e.$watch("yundunInfo", function(t) {
                        angular.isDefined(t) && (e.yundunInfo.status === !1 && (e.yundunStatus = n.status.notopen),
                            e.yundunWeekly = n.yundunWeekly)
                    }),
                        e.$watch("yundunData", function(t) {
                            if (angular.isDefined(t)) {
                                var r = e.yundunData
                                    , i = n.status[r.guardStatus];
                                if (r.guardStatus == -1 || r.protectedTimes == -1 || r.protectedDays == -1)
                                    e.portalFailed = !0;
                                i ? e.yundunStatus = i : e.yundunStatus = n.status.abnormal
                            }
                        }),
                        e.refreshYundunData = function() {
                            e.$emit("refreshProductData", {
                                products: "yundun"
                            })
                        }
                }
            }
        })
    }),
    define("home/directives/homeYundunClass", ["./directives"], function(e) {
        e.directive("homeYundunClass", function() {
            return {
                restrict: "A",
                scope: !0,
                link: function(e, t, n) {
                    e.$watchCollection("[yundunData,yundunInfo]", function(t) {
                        if (angular.isDefined(t)) {
                            var n = e.yundunInfo
                                , r = e.yundunData;
                            angular.isDefined(n) && (n.status ? angular.isDefined(r) && r.protectedTimes == 0 ? e.yundunClass = "yundun-bg-health" : e.yundunClass = "yundun-bg-warning" : e.yundunClass = "yundun-bg-notopen")
                        }
                    }, !0)
                }
            }
        })
    }),
    define("home/directives/homeQrCode", ["./directives"], function(e) {
        e.directive("homeQrCode", ["$timeout", function(e) {
            return {
                restrict: "A",
                link: function(t, n, r) {
                    t.showCodePanel = !1;
                    var i = n.find(".home-code-icon"), s = n.find(".home-code-panel"), o;
                    i.on("mouseenter", function() {
                        o = e(function() {
                            t.showCodePanel = !0
                        }, 100)
                    }),
                        i.on("mouseleave", function() {
                            e.cancel(o)
                        }),
                        s.on("mouseleave", function() {
                            e(function() {
                                t.showCodePanel = !1
                            })
                        })
                }
            }
        }
        ])
    }),
    define("home/directives/homeSuggestion", ["./directives", "../cons/homeCons"], function(e, t) {
        e.directive("homeSuggestion", ["$http", "$timeout", function(e, t) {
            return {
                restrict: "A",
                scope: !0,
                templateUrl: "scripts/home/partials/homeSuggestion.html",
                link: function(n, r, i) {
                    function a() {
                        var r = {
                            method: "get",
                            url: u,
                            params: {
                                id: "home"
                            }
                        };
                        e(r).then(function(e) {
                            e && e.data && e.data.code == "200" && e.data.data.notice && e.data.data.notice.suggestions && t(function() {
                                n.suggestion = e.data.data.notice.suggestions.data[0]
                            })
                        })
                    }
                    function f() {
                        e({
                            method: "jsonp",
                            url: o,
                            params: {
                                id: n.suggestion && n.suggestion.id,
                                show: !1,
                                callback: "JSON_CALLBACK"
                            }
                        }),
                            n.suggestion.show = !1
                    }
                    var s = function() {
                        var e = window.location.host;
                        if (!e.match(/^.+\.aliyun\.|^aliyun\./))
                            return ".com";
                        var t = e.replace(/^.*\.aliyun|^aliyun/i, "");
                        return t || (t = ".com"),
                            t
                    }()
                        , o = "//home.console.aliyun" + s + "/setNoticeStatus.js" + "?timestamp=" + (new Date).getTime()
                        , u = "/notice/suggestions.json";
                    a(),
                        n.readSuggestion = f
                }
            }
        }
        ])
    }),
    define("home/directives/homeUndoActive", ["app"], function(e) {
        e.directive("homeUndoActive", ["$timeout", function(e) {
            return {
                restrict: "AM",
                scope: !0,
                link: function(t, n, r, i) {
                    t.activeStatus = !1,
                        t.toggleActiveStatus = function() {
                            t.activeStatus = !t.activeStatus
                        }
                        ,
                        n.on("mouseleave", function(n) {
                            e(function() {
                                t.activeStatus = !1
                            }, 0)
                        })
                }
            }
        }
        ])
    }),
    define("home/directives/homeSercurityLevel", ["./directives", "../cons/homeCons"], function(e, t) {
        e.directive("homeSercurityLevel", function() {
            return {
                restrict: "A",
                scope: {
                    level: "="
                },
                template: '<span class="{{levelObject.className}}">{{levelObject.text}}</span>',
                link: function(e, n, r) {
                    var i = t.SERCURITY_LEVEL;
                    e.$watch("level", function(t) {
                        angular.isDefined(t) && (e.levelObject = i[t] || {
                                text: "-"
                            })
                    })
                }
            }
        })
    }),
    define("home/directives/noAuthPage", ["./directives"], function(e) {
        e.directive("noAuthPage", function() {
            return {
                restrict: "A",
                templateUrl: "scripts/home/partials/noAuthPage.html",
                controller: ["viewFrameworkSetting", function(e) {
                    e.setSidebar("full")
                }
                ],
                link: function(e, t, n) {}
            }
        })
    }),
    define("home/directives/homeMobileCode", ["./directives"], function(e) {
        e.directive("homeMobileCode", ["$timeout", function(e) {
            return {
                restrict: "A",
                replace: !0,
                templateUrl: "scripts/home/partials/homeMobileCode.html",
                link: function(t, n, r) {
                    t.showCodePanel = !1;
                    var i = n.find(".home-code-icon"), s = n.find(".home-code-panel"), o;
                    i.on("mouseenter", function() {
                        o = e(function() {
                            t.showCodePanel = !0
                        }, 100)
                    }),
                        i.on("mouseleave", function() {
                            e.cancel(o)
                        }),
                        s.on("mouseleave", function() {
                            e(function() {
                                t.showCodePanel = !1
                            })
                        })
                }
            }
        }
        ])
    }),
    define("home/directives/homeChannelRedirect", ["./directives", "../cons/homeCons"], function(e, t) {
        e.directive("homeChannelRedirect", ["$timeout", "viewFrameworkSetting", "$sce", function(e, n, r) {
            function i(e, i, o) {
                n.setSidebar("none");
                var u = ALIYUN_HOME_CONSOLE_CONFIG.identity
                    , a = t.CHANNEL_NAMING[u]
                    , f = ALIYUN_HOME_CONSOLE_CONFIG.setting
                    , l = ALIYUN_HOME_CONSOLE_CONFIG.product;
                if (!l || !l.productId || !f) {
                    e.middlePageConfig = {
                        productTitle: "阿里云管理控制台",
                        description: "<p >欢迎来到阿里云管理控制台</p>",
                        button: {
                            href: "https://home.console.aliyun.com",
                            text: "进入管理控制台首页"
                        }
                    };
                    return
                }
                e.middlePageConfig = {
                    productId: "",
                    productTitle: l.names.zh,
                    isBright: !0
                },
                    f && f.channel && l.domains ? (e.middlePageConfig.description = r.trustAsHtml("<p>尊敬的用户，您是我们尊贵的" + a + '专属用户。</p><p>请确保专线或者vpn已经接入，如未接入请点击<a data-spm-protocol="i"  href="' + f.vpnUrl + '" target="_blank">这里</a></p>'),
                        e.middlePageConfig.button = {
                            href: s(f.consoleUrl),
                            text: "进入专属" + l.names.zh + "控制台"
                        }) : (e.middlePageConfig.description = "欢迎来到" + l.names.zh + "控制台",
                        e.middlePageConfig.button = {
                            href: s(l.domains.OFFICIAL),
                            text: "进入" + l.names.zh + "控制台"
                        })
            }
            function s(e) {
                return e.match(/^(http(s)?:)?\/\/*/) ? e : "http://" + e
            }
            return {
                restrict: "A",
                templateUrl: "scripts/home/partials/homeChannelRedirect.html",
                link: i
            }
        }
        ])
    }),
    define("home/directives/_base", ["./directives", "./homeAccountBalance", "./homeAccountBalanceOld", "./homeWithholdingAction", "./homeYundunActions", "./homeYundunClass", "./homeQrCode", "./homeSuggestion", "./homeUndoActive", "./homeSercurityLevel", "./noAuthPage", "./homeMobileCode", "./homeChannelRedirect"], function() {}),
    define("home/filters/filters", ["angular", "../cons/homeLinkCons"], function(e, t) {
        var n = e.module(["homeFilters"], []);
        n.filter("homeLinkConsFilter", function() {
            return function(e) {
                return t[e]
            }
        })
    }),
    define("home/filters/_base", ["./filters"], function() {}),
    define("common/services/bootstrap", ["app", "angular", "ui.router", "ui.bootstrap"], function(e, t) {
        function r() {
            Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                    var t = this.length >>> 0
                        , n = Number(arguments[1]) || 0;
                    n = n < 0 ? Math.ceil(n) : Math.floor(n),
                    n < 0 && (n += t);
                    for (; n < t; n++)
                        if (n in this && this[n] === e)
                            return n;
                    return -1
                }
            )
        }
        var n = function(e) {
                var t = "", r, i, s, o, u, a, f;
                for (r in e) {
                    i = e[r];
                    if (i instanceof Array)
                        for (f = 0; f < i.length; ++f)
                            u = i[f],
                                a = {},
                                a[r] = u,
                                t += n(a) + "&";
                    else if (i instanceof Object)
                        for (o in i)
                            u = i[o],
                                s = r + "[" + o + "]",
                                a = {},
                                a[s] = u,
                                t += n(a) + "&";
                    else
                        i !== undefined && i !== null  && (t += encodeURIComponent(r) + "=" + encodeURIComponent(i) + "&")
                }
                return t.length ? t.substr(0, t.length - 1) : t
            }
            ;
        r(),
            e.run(["$rootScope", "$state", "$stateParams", function(e, t, n) {
                e.$state = t,
                    e.$stateParams = n,
                    e.$on("$stateChangeSuccess", function(e, t, n, r, i) {}),
                    e.$on("$stateChangeError", function(e, t, n, r, i, s) {
                        console.log("ERROR " + s + " . From state: " + r.name + " to state: " + t.name)
                    })
            }
            ]).factory("aliyunHttpInterceptor", ["$q", function(e) {
                return {
                    requestError: function(t) {
                        return console.log("request error: " + t),
                            e.reject(t)
                    },
                    request: function(t) {
                        return t || e.when(t)
                    },
                    response: function(t) {
                        return t || e.when(t)
                    },
                    responseError: function(t) {
                        return console.log("response error: ", t),
                            e.reject(t)
                    }
                }
            }
            ]).config(["$httpProvider", function(e) {
                e.interceptors.push("aliyunHttpInterceptor")
            }
            ]).config(["$provide", function(e) {
                e.decorator("$exceptionHandler", ["$delegate", function(e) {
                    return function(t, n) {
                        e(t, n),
                            console.log(t.message || t)
                    }
                }
                ])
            }
            ]).factory("aliyun.console.requestWrapper", ["$http", function(e) {
                var r = function(r) {
                        var i = {
                            method: "GET"
                        }
                            , s = t.extend({}, i, r)
                            , o = s.method.toUpperCase();
                        o == "POST" ? (s.headers = s.headers || {},
                            s.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8",
                            s.data == undefined && s.params ? (s.data = n(s.params),
                                delete s.params) : s.data = n(s.data)) : o == "GET" && (s.params = s.params || {},
                            s.params.__preventCache = (new Date).getTime());
                        var u = e(s).success(function(e, t, n, r) {}).error(function(e, t, n, r) {});
                        return t.isFunction(s.dataFormatter) && u.then(function(e) {
                            return s.dataFormatter.apply(null , [e])
                        }),
                            u
                    }
                    , i = function(e, t) {
                        return t = t || {},
                            t.url = e,
                            r(t)
                    }
                    ;
                return {
                    sendRequest: r,
                    sendRequestWithUrl: i
                }
            }
            ])
    }),
    define("common/services/_base", ["app", "./bootstrap", "./Dialog", "./i18nService"], function(e, t, n) {}),
    define("common/directives/base", ["app", "../services/i18nService"], function(ng, i18nService) {
        var i18nInstance = i18nService.getI18n("directives.base")
            , okText = i18nInstance.i18n(!0, "common.lb.confirm")
            , cancelText = i18nInstance.i18n(!0, "common.lb.cancel");
        ng.directive("textTrimmer", ["$compile", "$timeout", function($compile, $timeout) {
            var manager = [];
            return angular.element(document).on("click", function() {
                $timeout(function() {
                    if (manager.length > 0) {
                        var e = manager.splice(0, 1)[0];
                        e.showPanel = !1
                    }
                })
            }),
            {
                scope: !0,
                restrict: "AC",
                controller: ["$rootScope", "$modal", "$animate", "$timeout", "aliyun.console.requestWrapper", function(e, t, n, r, i) {
                    return {
                        $rootScope: e,
                        $modal: t,
                        $animate: n,
                        $timeout: r,
                        requestWrapper: i
                    }
                }
                ],
                link: function(scope, el, attrs, svcs) {
                    attrs.$observe("text", function(e) {
                        scope._oldText = scope.text = e
                    }),
                        scope.title = attrs.title,
                        scope.cAlwaysShow = attrs.cAlwaysShow === "true",
                        angular.forEach(["cFrom", "cDirectives"], function(e) {
                            scope[e] = attrs[e]
                        });
                    var pen = angular.element(scope.cFrom ? scope.cFrom : '<a class="ecs-texttrimmer-pen btn btn-default btn-xs c-texttrimmer-pen" href="#"><span class="icon-pen"></span></a>').attr({
                        "ng-show": "showPen"
                    });
                    if (!scope.cAlwaysShow) {
                        scope.showPen = !1;
                        var hoverHandler = function hover(e) {
                            scope.showPen = e.type === "mouseover";
                            try {
                                hover._thandler.cancel()
                            } catch (e) {}
                            scope.showPen ? scope.$apply() : hover._thandler = svcs.$timeout(function() {
                                scope.$apply()
                            }, 200)
                        }
                            , trigger = el;
                        attrs.cTriggerSource && (trigger = eval("el." + attrs.cTriggerSource)),
                            trigger.on("mouseover mouseout", function hover(e) {
                                hover._inited || (hover._inited = !0,
                                    el.after(pen),
                                    scope.showPen = !0,
                                    pen.on("mouseover mouseout", function(e) {
                                        hoverHandler(e)
                                    })),
                                    hoverHandler(e)
                            })
                    } else
                        scope.showPen = !0,
                        !scope.cFrom && el.after(pen);
                    $compile(pen)(scope);
                    var show = function(e) {
                            if (e === undefined)
                                return scope.showPanel === undefined ? !1 : scope.showPanel;
                            svcs.$timeout(function() {
                                scope.disabled = !1,
                                    scope.showPanel = e
                            })
                        }
                        ;
                    pen.on("click", function(t) {
                        t.preventDefault();
                        if (!show()) {
                            if (!manager.length || !manager[0].showPanel)
                                t.stopPropagation(),
                                    manager.splice(0, 1);
                            manager.push(scope);
                            var n = ['<div ng-show="showPanel" class="c-texttrimmer-box"><p>{{title}}：</p><form name="textTrimmer">', '   <p><input name="editor" size="32" class="form-control" ng-model="text" type="text" ng-disabled="disabled"' + scope.cDirectives + "/></p>", '   <p class="c-texttrimmer-tip" ng-show="textTrimmer.$invalid || error" ng-bind="msg"></p>', '   <div class="c-texttrimmer-btnbox">', '     <a class="btn btn-primary" href="#" ng-disabled="textTrimmer.$invalid || disabled" ng-click="handler($event, true);">' + okText + "</a>", '     <a class="btn btn-default" href="#" ng-disabled="disabled" ng-click="handler($event, false);">' + cancelText + "</a>", "   </div>", "</form></div>"]
                                , r = function(e, t) {
                                var n = angular.element(window)
                                    , r = e.offset()
                                    , i = n.scrollLeft() + n.width()
                                    , s = n.scrollTop() + n.height()
                                    , o = r.left + t[0].offsetWidth
                                    , u = t[0].offsetHeight
                                    , a = e[0].offsetHeight
                                    , f = r.top + a
                                    , l = f + u
                                    , f = s >= l ? f + 5 : r.top - a - u
                                    , c = i >= o ? r.left : r.left + i - o;
                                return t.css({
                                    top: f,
                                    left: c
                                })
                            }
                                , i = angular.element(n.join("")).on("click", function(e) {
                                e.stopPropagation()
                            });
                            i.appendTo(document.body),
                                r(el, i),
                                scope.handler = function(e, t) {
                                    e.preventDefault();
                                    if (t) {
                                        scope.error = !1,
                                            scope.disabled = !0,
                                            scope._oldText = scope.text;
                                        if (scope.btnHandler) {
                                            var n = scope.btnHandler(t);
                                            svcs.requestWrapper.sendRequestWithUrl(n.url, {
                                                method: n.type,
                                                data: angular.extend({}, n.data)
                                            }).then(function(e) {
                                                var t = e.data;
                                                t.code >= 200 ? (show(!1),
                                                angular.isFunction(scope.updateItemNameCallback) && scope.updateItemNameCallback(scope.item, scope.text),
                                                    el.text(scope.text)) : (show(!0),
                                                    scope.error = !0,
                                                    scope.msg = t.message || i18nInstance.i18n("msg.save.fail"))
                                            }, function(e) {
                                                show(!0),
                                                    scope.error = !0,
                                                    scope.msg = i18nInstance.i18n("msg.request.exception")
                                            })
                                        } else
                                            el.text(scope.text),
                                                show(!1)
                                    } else
                                        scope.text = scope._oldText,
                                            show(!1)
                                }
                                ,
                                $compile(i)(scope),
                                scope.$watch("showPanel", function(e) {
                                    !e && i.remove()
                                }),
                                svcs.$rootScope.$on("$locationChangeStart", function() {
                                    i.remove()
                                })
                        }
                        show(!show())
                    })
                }
            }
        }
        ])
    });
