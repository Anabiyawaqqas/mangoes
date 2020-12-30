class ground  {
  constroctor(x,y,w,h)
  {{
    var_options=
    isStatic=true
  }
this.x=x;
this.y=y;
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body);
}
display(){

  Push ()
  translate(groundpos.x,groundpos.y);
  rectMode(CENTRE)
  fill (128,128,128)
  rect(0,0,this.w, this.h);
			pop()
}
}
