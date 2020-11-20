using System;
namespace ds
{
    public class Fuctions
    {
        public static void TimesTable(byte number)
        {

            Console.WriteLine($"This is the {number} times table");
            for (int row = 1; row <= 12; row++)
            {
                Console.WriteLine(
                    $"{row} x {number} = {row * number}"
                    );
            }

        }

        public static void RunTimesTable()
        {
            bool isNumber;

            do
            {
                Console.WriteLine("Enter a number between 0 and 255");
                isNumber = byte.TryParse(Console.ReadLine(), out byte number);

                if (isNumber)
                {
                    TimesTable(number);
                }
                else
                {
                    Console.WriteLine("You did not enter a valid numeber!");
                }
            }
            while (isNumber);
        }
        public static decimal CalculateTax(decimal amount, string twoletterRegion)
        {

            decimal rate = 0.0M;
            switch (twoletterRegion)
            {
                case "CH": // Switzerland
                    rate = 0.08M;
                    break;
                case "DK": //Denmark
                case "NO": // Norway
                    rate = 0.25M;
                    break;
                case "GB":
                case "FR":
                    rate = 0.27M;
                    break;

                default: // Most us state
                    rate = 0.06M;
                    break;
            }
            return amount * rate;

        }

        public static void RunCalculateTax()
        {
            Console.WriteLine("Enter an amount:");
            string amountInText = Console.ReadLine();

            Console.WriteLine("Enter a two-letter region code");
            string region = Console.ReadLine();

            if (decimal.TryParse(amountInText, out decimal amount))
            {
                decimal taxtopay = CalculateTax(amount, region);
                Console.WriteLine($"You Must pay {taxtopay} in sales tax.");
            }
            else
            {
                Console.WriteLine("You did not enter a valid amount!");
            }
        }

        /// <summary>
        /// Pass 32-bit interger and it will be converted into its ordinal equivalent.
        /// </summary>
        /// <param name="number" > Number is a cardinal value e.g 1,2,3,4,5 and so on</param>
        /// <returns>Number as an ordinal value e.g 1st, 2nd, 3rd, and so on </returns>
        public static string CardinalToOrdinal(int number)
        {
            switch (number)
            {
                case 11:
                case 12:
                case 13:
                    return $"{number}th";

                default:
                    string numberAstext = number.ToString();
                    char lastdigit = numberAstext[numberAstext.Length - 1];
                    string suffix = string.Empty;
                    switch (lastdigit)
                    {
                        case '1':
                            suffix = "st";
                            break;
                        case '2':
                            suffix = "nd";
                            break;
                        case '3':
                            suffix = "rd";
                            break;
                        default:
                            suffix = "th";
                            break;
                    }
                    return $"{number}{suffix}";
            }

        }

        public static void RunCaldinalToOrdinal()
        {
            for (int number = 1; number <= 40; number++)
            {
                Console.WriteLine($"{ CardinalToOrdinal(number) }");
            }
            Console.WriteLine();
        }


        public static int Factorial(int number)
        {
            if (number < 1)
            {
                return 0;
            }
            else if (number == 1)
            {
                return 1;
            }
            else
            {
                return number * Factorial(number - 1);
            }
        }

        public static void RunFactorial() {
          bool isNumber;
          do {
            Console.Write("Enter a number ");
            isNumber = int.TryParse(Console.ReadLine(),  out int number);

            if(isNumber) {

              Console.WriteLine($"{number}!  = {Factorial(number)}");
            }
            else {
              Console.WriteLine("You did not enter a valid number!");
            }
          } while(isNumber);

        }








    }
}
