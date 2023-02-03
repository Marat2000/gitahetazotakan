var pages=document.getElementsByClassName('pages');
var i=0;
var k=[];
k.length=pages.length;
k.fill(0);
	
	for (i=0;i<pages.length;i++)
{
	a(pages[i],k[i]);
}


function a(a,k)
{
	a.onclick=()=>
{
		if(k==0)
		{a.style.backgroundImage=" linear-gradient( 145deg, #fff,#9ce38f)";
k=1;
return k;}
	if(k==1)
			{a.style.backgroundImage=" linear-gradient( 145deg, #fff,#e39e8f)";
		k=2;return k;}
if(k==2)
			{a.style.backgroundImage=" linear-gradient( 145deg, #fff,#bbbbbb)";
		k=0;return k;}
	};
}