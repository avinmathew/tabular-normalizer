# Tabular Normalizer

Normalizes a Analysis Services Tabular Model.bim file by ordering tables, columns, measures and relationships alphabetically. Normalizing creates a deterministic sort order in the Model.bim file to allow more accurate diff detection.

This is useful because Visual Studio will change the order of items in the Model.bim based on the model data cached on disk. This can particularly be a problem in collaborative development, as when different people check in changes, items are appear reordered in the diff even though there is no functional change.

## Usage

```
node tabular-normalizer.js c:\Tabular Project\Model.bim c:\Tabular Project\Model-Output.bim
```
