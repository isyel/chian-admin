${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    string BaseClass(Class c) => c.BaseClass.Name;
}
$Classes(*Model)[
import { $BaseClass } from './$BaseClass';

export class $Name extends $BaseClass {$Properties[
    public $name: $Type;]
}]
