#include <iostream>
using namespace std;

int main()
{
    // variables
    string name = "Mercy";
    string campus = "Uganda Martyrs Namugongo\n\n";
    cout << name << endl;
    cout << campus;

    int age = 21;
    cout << "Age is " << age << "\n";

    double riceinKgs = 23.5;
    cout << "We are taking " << riceinKgs << "kgs of rice home.\n";

    char gender = 'F';
    cout << "Gender: " << gender << "\n";

    bool hasEatenLunch = false;
    cout << "Has Eaten Lunch: " << hasEatenLunch;
    return 0;
}
// g++ sample.cpp -o sample.exe && sample.exe