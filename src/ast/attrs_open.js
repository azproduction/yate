yate.AST.attrs_open = {};

yate.AST.attrs_open._init = function(item) {
    this.Name = item.Name;
    this.Attrs = item.Attrs;
    this.Attrs.parent = this; // FIXME: По идее, переопределение parent должно происходить в this.make('attrs_open', ...),
                              //        но setTypes для xml_attr случает раньше этого.
    item.Attrs = null; // FIXME: В правой части, похоже, можно что угодно написать. Нужна ли эта строчка вообще?
};

yate.AST.attrs_open._type = 'xml';

