namespace PacktLibrary
{
        public struct DisplacementVector {
            public int x;
            public int y;
        public DisplacementVector(int initialx, int intialY)
        {
            x = initialx;
            y = intialY;
        }

        public static DisplacementVector operator +(
            DisplacementVector vector1,
            DisplacementVector vector2
        ){
            return new DisplacementVector(
                vector1.x + vector2.x,
                vector1.y + vector2.y
            );
        }

        }

}