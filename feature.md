1.  遍历文件：转换为AST,    

   

2. 解析单个AST，吐出生成的schema和输出位置

   + 暂时只支持同一个文件输出
   
   + 后续支持多文件输出
   
     
   
3. 根据输出位置，重写代码。



# feature

1. 注释prop 支持非标准json

2. 属性props不使用注释

3. 自定义rule

4. Interface 多层

5. template string can not format in multi-line

6. 动态引用schema model：动态工厂模式（完成）；动态导入新Model
   
7. tuple 类型支持, 联合类型支持
