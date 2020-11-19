namespace ds
{
    class Point
    {
        public int X { get; }
        public int Y { get; }
        public Point(int x, int y) => (X, Y) = (x, y);
        public void Deconstruct(out int x, out int y) => (x, y) = (X, Y);
    }
    static string Display(object o) {
      switch(o){
        case Point p when P.x == 0 && p.Y == 0:
          return "origin";
        case Point p:
           return $""
      }
    }
}
