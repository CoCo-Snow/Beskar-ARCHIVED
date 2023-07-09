const aaFirefly = extendContent("aa-firefly", {
  drawBase(tile){
    Draw.rect(Core.atlas.find(this.name + "-base"), tile.drawx(), tile.drawy());
    this.super$drawBase(tile);
  },
    icons(){
        return [
            Core.atlas.find(this.name + "-base"),
            Core.atlas.find(this.name)
        ];
    }
});